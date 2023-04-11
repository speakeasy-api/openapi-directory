import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDeviceLiveToolsPingRequestBody extends SpeakeasyBase {
    /**
     * Count parameter to pass to ping. [1..5], default 5
     */
    count?: number;
    /**
     * FQDN, IPv4 or IPv6 address
     */
    target: string;
}
export declare class CreateDeviceLiveToolsPingRequest extends SpeakeasyBase {
    requestBody: CreateDeviceLiveToolsPingRequestBody;
    serial: string;
}
/**
 * Ping request parameters
 */
export declare class CreateDeviceLiveToolsPing201ApplicationJSONRequest extends SpeakeasyBase {
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
export declare class CreateDeviceLiveToolsPing201ApplicationJSON extends SpeakeasyBase {
    /**
     * Id to check the status of your ping request.
     */
    pingId?: string;
    /**
     * Ping request parameters
     */
    request?: CreateDeviceLiveToolsPing201ApplicationJSONRequest;
    /**
     * Status of the ping request.
     */
    status?: string;
    /**
     * GET this url to check the status of your ping request.
     */
    url?: string;
}
export declare class CreateDeviceLiveToolsPingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createDeviceLiveToolsPing201ApplicationJSONObject?: CreateDeviceLiveToolsPing201ApplicationJSON;
}
