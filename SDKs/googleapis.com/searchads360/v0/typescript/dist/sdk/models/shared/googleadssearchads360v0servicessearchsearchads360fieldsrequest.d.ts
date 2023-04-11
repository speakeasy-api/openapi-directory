import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for SearchAds360FieldService.SearchSearchAds360Fields.
 */
export declare class GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest extends SpeakeasyBase {
    /**
     * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
     */
    pageSize?: number;
    /**
     * Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The query string.
     */
    query?: string;
}
