import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Period Type.
 */
export declare enum GoogleCloudChannelV1PeriodPeriodTypeEnum {
    PeriodTypeUnspecified = "PERIOD_TYPE_UNSPECIFIED",
    Day = "DAY",
    Month = "MONTH",
    Year = "YEAR"
}
/**
 * Represents period in days/months/years.
 */
export declare class GoogleCloudChannelV1Period extends SpeakeasyBase {
    /**
     * Total duration of Period Type defined.
     */
    duration?: number;
    /**
     * Period Type.
     */
    periodType?: GoogleCloudChannelV1PeriodPeriodTypeEnum;
}
