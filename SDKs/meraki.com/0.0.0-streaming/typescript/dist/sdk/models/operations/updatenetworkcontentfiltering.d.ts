import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * URL category list size which is either 'topSites' or 'fullList'
 */
export declare enum UpdateNetworkContentFilteringRequestBodyUrlCategoryListSizeEnum {
    FullList = "fullList",
    TopSites = "topSites"
}
export declare class UpdateNetworkContentFilteringRequestBody extends SpeakeasyBase {
    /**
     * A list of URL patterns that are allowed
     */
    allowedUrlPatterns?: string[];
    /**
     * A list of URL categories to block
     */
    blockedUrlCategories?: string[];
    /**
     * A list of URL patterns that are blocked
     */
    blockedUrlPatterns?: string[];
    /**
     * URL category list size which is either 'topSites' or 'fullList'
     */
    urlCategoryListSize?: UpdateNetworkContentFilteringRequestBodyUrlCategoryListSizeEnum;
}
export declare class UpdateNetworkContentFilteringRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkContentFilteringRequestBody;
    networkId: string;
}
export declare class UpdateNetworkContentFilteringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkContentFiltering200ApplicationJSONObject?: Record<string, any>;
}
