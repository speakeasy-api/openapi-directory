import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
    /**
     * The group policy to be applied to clients
     */
    groupPolicyId?: string;
    /**
     * The name of the Identity PSK
     */
    name?: string;
    /**
     * The passphrase for client authentication
     */
    passphrase?: string;
}
export declare class UpdateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidIdentityPskRequestBody;
    identityPskId: string;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject?: Record<string, any>;
}
