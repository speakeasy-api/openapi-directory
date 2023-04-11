import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessRfProfilesRequest extends SpeakeasyBase {
    /**
     * If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false.
     */
    includeTemplateProfiles?: boolean;
    networkId: string;
}
export declare class GetNetworkWirelessRfProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessRfProfiles200ApplicationJSONObjects?: Record<string, any>[];
}
