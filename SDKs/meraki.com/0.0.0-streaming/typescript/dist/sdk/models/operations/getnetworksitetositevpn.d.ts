import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSiteToSiteVpnRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSiteToSiteVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSiteToSiteVpn200ApplicationJSONObject?: Record<string, any>;
}
