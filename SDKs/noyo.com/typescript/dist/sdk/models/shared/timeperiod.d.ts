import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unit frequency of premium period
 */
export declare enum TimePeriodUnitEnum {
    Annual = "annual",
    Month = "month",
    SemiMonthly = "semi-monthly"
}
export declare class TimePeriod extends SpeakeasyBase {
    /**
     * Length of premium period
     */
    amount: number;
    /**
     * Unit frequency of premium period
     */
    unit: TimePeriodUnitEnum;
}
