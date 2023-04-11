import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
 */
export declare enum GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}
export declare class GetDeviceCameraAnalyticsZoneHistoryRequest extends SpeakeasyBase {
    /**
     * [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
     */
    objectType?: GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum;
    /**
     * The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60.
     */
    resolution?: number;
    serial: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 14 hours after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour.
     */
    timespan?: number;
    zoneId: string;
}
export declare class GetDeviceCameraAnalyticsZoneHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraAnalyticsZoneHistory200ApplicationJSONObjects?: Record<string, any>[];
}
