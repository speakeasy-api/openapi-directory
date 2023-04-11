import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDeviceApplianceVmxAuthenticationTokenRequest extends SpeakeasyBase {
    serial: string;
}
/**
 * Successful operation
 */
export declare class CreateDeviceApplianceVmxAuthenticationToken201ApplicationJSON extends SpeakeasyBase {
    /**
     * The expiration time for the token, in ISO 8601 format
     */
    expiresAt?: string;
    /**
     * The newly generated authentication token for the vMX instance
     */
    token?: string;
}
export declare class CreateDeviceApplianceVmxAuthenticationTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createDeviceApplianceVmxAuthenticationToken201ApplicationJSONObject?: CreateDeviceApplianceVmxAuthenticationToken201ApplicationJSON;
}
