import { SpeakeasyBase } from "../../../internal/utils";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
/**
 * The body part 2 of a periodic payment initation request containes the execution related informations
 *
 * @remarks
 * of the periodic payment.
 *
 */
export declare class PeriodicPaymentInitiationXmlPart2StandingorderTypeJson extends SpeakeasyBase {
    /**
     * Day of execution as string.
     *
     * @remarks
     *
     * This string consists of up two characters.
     * Leading zeroes are not allowed.
     *
     * 31 is ultimo of the month.
     *
     */
    dayOfExecution?: DayOfExecutionEnum;
    /**
     * The last applicable day of execution.
     *
     * @remarks
     * If not given, it is an infinite standing order.
     *
     */
    endDate?: Date;
    /**
     * "following" or "preceding" supported as values.
     *
     * @remarks
     * This data attribute defines the behaviour when recurring payment dates falls on a weekend or bank holiday.
     * The payment is then executed either the "preceding" or "following" working day.
     * ASPSP might reject the request due to the communicated value, if rules in Online-Banking are not supporting
     * this execution rule.
     *
     */
    executionRule?: ExecutionRuleEnum;
    /**
     * The following codes from the "EventFrequency7Code" of ISO 20022 are supported:
     *
     * @remarks
     * - "Daily"
     * - "Weekly"
     * - "EveryTwoWeeks"
     * - "Monthly"
     * - "EveryTwoMonths"
     * - "Quarterly"
     * - "SemiAnnual"
     * - "Annual"
     * - "MonthlyVariable"
     *
     */
    frequency: FrequencyCodeEnum;
    /**
     * The first applicable day of execution starting from this date is the first payment.
     *
     * @remarks
     *
     */
    startDate: Date;
}
