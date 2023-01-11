import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TimePeriodUnitEnum {
    Annual = "annual",
    Month = "month",
    SemiMonthly = "semi-monthly"
}
export declare class TimePeriod extends SpeakeasyBase {
    amount: number;
    unit: TimePeriodUnitEnum;
}
