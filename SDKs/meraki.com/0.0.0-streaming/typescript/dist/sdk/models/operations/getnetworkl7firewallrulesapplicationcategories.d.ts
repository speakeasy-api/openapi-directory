import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkL7FirewallRulesApplicationCategoriesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkL7FirewallRulesApplicationCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkL7FirewallRulesApplicationCategories200ApplicationJSONObject?: Record<string, any>;
}
