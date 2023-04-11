import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of SNMP access. Can be one of 'none' (disabled), 'community' (V1/V2c), or 'users' (V3).
 */
export declare enum UpdateNetworkSnmpRequestBodyAccessEnum {
    Community = "community",
    None = "none",
    Users = "users"
}
export declare class UpdateNetworkSnmpRequestBodyUsers extends SpeakeasyBase {
    /**
     * The passphrase for the SNMP user. Required.
     */
    passphrase: string;
    /**
     * The username for the SNMP user. Required.
     */
    username: string;
}
export declare class UpdateNetworkSnmpRequestBody extends SpeakeasyBase {
    /**
     * The type of SNMP access. Can be one of 'none' (disabled), 'community' (V1/V2c), or 'users' (V3).
     */
    access?: UpdateNetworkSnmpRequestBodyAccessEnum;
    /**
     * The SNMP community string. Only relevant if 'access' is set to 'community'.
     */
    communityString?: string;
    /**
     * The list of SNMP users. Only relevant if 'access' is set to 'users'.
     */
    users?: UpdateNetworkSnmpRequestBodyUsers[];
}
export declare class UpdateNetworkSnmpRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSnmpRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSnmp200ApplicationJSONObject?: Record<string, any>;
}
