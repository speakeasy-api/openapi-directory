import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * URL category list size which is either 'topSites' or 'fullList'
 */
export declare enum UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum {
    FullList = "fullList",
    TopSites = "topSites"
}
export declare class UpdateNetworkApplianceContentFilteringRequestBody extends SpeakeasyBase {
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
    urlCategoryListSize?: UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;
}
export declare class UpdateNetworkApplianceContentFilteringRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceContentFilteringRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceContentFilteringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceContentFiltering200ApplicationJSONObject?: Record<string, any>;
}
