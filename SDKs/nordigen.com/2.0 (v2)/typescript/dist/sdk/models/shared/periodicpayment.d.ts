import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Behavior when periodic payment dates fall on holiday.
 */
export declare enum PeriodicPaymentExecutionRuleEnum {
    Following = "following",
    Preceding = "preceding"
}
export declare enum PeriodicPaymentFrequencyEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    EveryTwoWeeks = "EveryTwoWeeks",
    Monthly = "Monthly",
    EveryTwoMonths = "EveryTwoMonths",
    Quarterly = "Quarterly",
    SemiAnnual = "SemiAnnual",
    Annual = "Annual",
    MonthlyVariable = "MonthlyVariable"
}
/**
 * Periodic Payment Serializer.
 */
export declare class PeriodicPayment extends SpeakeasyBase {
    dayOfExecution?: string;
    endDate?: Date;
    /**
     * Behavior when periodic payment dates fall on holiday.
     */
    executionRule?: PeriodicPaymentExecutionRuleEnum;
    frequency?: PeriodicPaymentFrequencyEnum;
    startDate: Date;
}
