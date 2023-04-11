import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Behavior when periodic payment dates fall on holiday.
 */
export declare enum PeriodicPaymentRequestExecutionRuleEnum {
    Following = "following",
    Preceding = "preceding"
}
export declare enum PeriodicPaymentRequestFrequencyEnum {
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
export declare class PeriodicPaymentRequest extends SpeakeasyBase {
    dayOfExecution?: string;
    endDate?: Date;
    /**
     * Behavior when periodic payment dates fall on holiday.
     */
    executionRule?: PeriodicPaymentRequestExecutionRuleEnum;
    frequency?: PeriodicPaymentRequestFrequencyEnum;
    startDate: Date;
}
