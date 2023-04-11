import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkContentFilteringCategoriesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkContentFilteringCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkContentFilteringCategories200ApplicationJSONObject?: Record<string, any>;
}
