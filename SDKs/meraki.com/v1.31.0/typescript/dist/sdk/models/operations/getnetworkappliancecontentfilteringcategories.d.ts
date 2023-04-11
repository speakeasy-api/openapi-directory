import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceContentFilteringCategoriesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceContentFilteringCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceContentFilteringCategories200ApplicationJSONObject?: Record<string, any>;
}
