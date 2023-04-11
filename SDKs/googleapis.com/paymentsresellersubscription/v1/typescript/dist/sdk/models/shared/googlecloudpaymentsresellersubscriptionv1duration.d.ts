import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The unit used for the duration
 */
export declare enum GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Month = "MONTH",
    Day = "DAY"
}
/**
 * Describes the length of a period of a time.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1Duration extends SpeakeasyBase {
    /**
     * number of duration units to be included.
     */
    count?: number;
    /**
     * The unit used for the duration
     */
    unit?: GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum;
}
