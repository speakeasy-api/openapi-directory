import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraVideoLinkRequest extends SpeakeasyBase {
    serial: string;
    /**
     * [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time.
     */
    timestamp?: Date;
}
export declare class GetDeviceCameraVideoLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraVideoLink200ApplicationJSONObject?: Record<string, any>;
}
