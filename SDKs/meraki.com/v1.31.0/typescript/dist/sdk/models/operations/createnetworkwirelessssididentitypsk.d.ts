import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
    /**
     * The group policy to be applied to clients
     */
    groupPolicyId: string;
    /**
     * The name of the Identity PSK
     */
    name: string;
    /**
     * The passphrase for client authentication. If left blank, one will be auto-generated.
     */
    passphrase?: string;
}
export declare class CreateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
    requestBody: CreateNetworkWirelessSsidIdentityPskRequestBody;
    networkId: string;
    number: string;
}
export declare class CreateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject?: Record<string, any>;
}
