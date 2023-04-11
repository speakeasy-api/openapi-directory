import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
 */
export declare enum GetDeviceCameraAnalyticsRecentObjectTypeEnum {
    Person = "person",
    Vehicle = "vehicle"
}
export declare class GetDeviceCameraAnalyticsRecentRequest extends SpeakeasyBase {
    /**
     * [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle].
     */
    objectType?: GetDeviceCameraAnalyticsRecentObjectTypeEnum;
    serial: string;
}
export declare class GetDeviceCameraAnalyticsRecentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraAnalyticsRecent200ApplicationJSONObjects?: Record<string, any>[];
}
