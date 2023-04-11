import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pay runs' pay frequency
 */
export declare enum PayRunPayRunPayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}
/**
 * The pay runs' pay schedule
 */
export declare class PayRunPayRunPaySchedule extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The pay runs' proceeding pay run
 */
export declare class PayRunPayRunProceedingPayRun extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
export declare class PayRunPayRun extends SpeakeasyBase {
    /**
     * The pay runs' executed
     */
    executed?: Date;
    /**
     * The pay runs' is supplementary
     */
    isSupplementary?: boolean;
    /**
     * The pay runs' pay frequency
     */
    payFrequency?: PayRunPayRunPayFrequencyEnum;
    /**
     * The pay runs' pay schedule
     */
    paySchedule?: PayRunPayRunPaySchedule;
    /**
     * The pay runs' payment date
     */
    paymentDate?: Date;
    /**
     * The pay runs' period end
     */
    periodEnd?: Date;
    /**
     * The pay runs' period start
     */
    periodStart?: Date;
    /**
     * The pay runs' proceeding pay run
     */
    proceedingPayRun?: PayRunPayRunProceedingPayRun;
    /**
     * The pay runs' sequence
     */
    sequence?: number;
    /**
     * The pay runs' tax period
     */
    taxPeriod?: number;
    /**
     * The pay runs' tax year
     */
    taxYear?: number;
}
/**
 * The pay run object.
 */
export declare class PayRun extends SpeakeasyBase {
    payRun?: PayRunPayRun;
}
