import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
import { MonthsOfExecutionEnum } from "./monthsofexecutionenum";
/**
 * Details of underlying standing orders.
 *
 * @remarks
 *
 */
export declare class StandingOrderDetails extends SpeakeasyBase {
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
    limitAmount?: Amount;
    /**
     * The format is following the regular expression \d{1,2}.
     *
     * @remarks
     * The array is restricted to 11 entries.
     * The values contained in the array entries shall all be different and the maximum value of one entry is 12.
     * This attribute is contained if and only if the frequency equals "MonthlyVariable".
     * Example: An execution on January, April and October each year is addressed by ["1", "4", "10"].
     *
     */
    monthsOfExecution?: MonthsOfExecutionEnum[];
    /**
     * This is multiplying the given frequency resulting the exact frequency,
     *
     * @remarks
     * e.g. Frequency=weekly and multiplicator=3 means every 3 weeks.
     * Remark: This attribute is rarely supported in the market.
     *
     */
    multiplicator?: number;
    /**
     * The first applicable day of execution starting from this date is the first payment.
     *
     * @remarks
     *
     */
    startDate: Date;
    /**
     * This element is only used in case of frequency equals "Monthly".
     *
     * @remarks
     *
     * If this element equals false it has no effect.
     * If this element equals true, then the execution rule is overruled if the day of execution would fall into a different month using the execution rule.
     *
     * Example: executionRule equals "preceding", dayOfExecution equals "02" and the second of a month is a Sunday.
     * In this case, the transaction date would be on the last day of the month before.
     *  This would be overruled if withinAMonthFlag equals true and the payment is processed on Monday the third of the Month.
     * Remark: This attribute is rarely supported in the market.
     *
     */
    withinAMonthFlag?: boolean;
}
