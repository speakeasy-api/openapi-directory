import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The SNMP version 3 authentication mode. Can be either 'MD5' or 'SHA'.
 */
export declare enum UpdateOrganizationSnmpRequestBodyV3AuthModeEnum {
    Md5 = "MD5",
    Sha = "SHA"
}
/**
 * The SNMP version 3 privacy mode. Can be either 'DES' or 'AES128'.
 */
export declare enum UpdateOrganizationSnmpRequestBodyV3PrivModeEnum {
    Aes128 = "AES128",
    Des = "DES"
}
export declare class UpdateOrganizationSnmpRequestBody extends SpeakeasyBase {
    /**
     * The list of IPv4 addresses that are allowed to access the SNMP server.
     */
    peerIps?: string[];
    /**
     * Boolean indicating whether SNMP version 2c is enabled for the organization.
     */
    v2cEnabled?: boolean;
    /**
     * The SNMP version 3 authentication mode. Can be either 'MD5' or 'SHA'.
     */
    v3AuthMode?: UpdateOrganizationSnmpRequestBodyV3AuthModeEnum;
    /**
     * The SNMP version 3 authentication password. Must be at least 8 characters if specified.
     */
    v3AuthPass?: string;
    /**
     * Boolean indicating whether SNMP version 3 is enabled for the organization.
     */
    v3Enabled?: boolean;
    /**
     * The SNMP version 3 privacy mode. Can be either 'DES' or 'AES128'.
     */
    v3PrivMode?: UpdateOrganizationSnmpRequestBodyV3PrivModeEnum;
    /**
     * The SNMP version 3 privacy password. Must be at least 8 characters if specified.
     */
    v3PrivPass?: string;
}
export declare class UpdateOrganizationSnmpRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationSnmpRequestBody;
    organizationId: string;
}
export declare class UpdateOrganizationSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationSnmp200ApplicationJSONObject?: Record<string, any>;
}
