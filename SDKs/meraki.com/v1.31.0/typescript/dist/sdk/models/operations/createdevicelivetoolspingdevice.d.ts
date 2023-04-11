import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDeviceLiveToolsPingDeviceRequestBody extends SpeakeasyBase {
    /**
     * Count parameter to pass to ping. [1..5], default 5
     */
    count?: number;
}
export declare class CreateDeviceLiveToolsPingDeviceRequest extends SpeakeasyBase {
    requestBody?: CreateDeviceLiveToolsPingDeviceRequestBody;
    serial: string;
}
/**
 * Ping request parameters
 */
export declare class CreateDeviceLiveToolsPingDevice201ApplicationJSONRequest extends SpeakeasyBase {
    /**
     * Number of pings to send
     */
    count?: number;
    /**
     * Device serial number
     */
    serial?: string;
    /**
     * IP address or FQDN to ping
     */
    target?: string;
}
/**
 * Successful operation
 */
export declare class CreateDeviceLiveToolsPingDevice201ApplicationJSON extends SpeakeasyBase {
    /**
     * Id to check the status of your ping request.
     */
    pingId?: string;
    /**
     * Ping request parameters
     */
    request?: CreateDeviceLiveToolsPingDevice201ApplicationJSONRequest;
    /**
     * Status of the ping request.
     */
    status?: string;
    /**
     * GET this url to check the status of your ping request.
     */
    url?: string;
}
export declare class CreateDeviceLiveToolsPingDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createDeviceLiveToolsPingDevice201ApplicationJSONObject?: CreateDeviceLiveToolsPingDevice201ApplicationJSON;
}
