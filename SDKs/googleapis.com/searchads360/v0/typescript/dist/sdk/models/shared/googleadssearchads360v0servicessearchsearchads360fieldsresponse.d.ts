import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0ResourcesSearchAds360Field } from "./googleadssearchads360v0resourcessearchads360field";
/**
 * Response message for SearchAds360FieldService.SearchSearchAds360Fields.
 */
export declare class GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse extends SpeakeasyBase {
    /**
     * Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page.
     */
    nextPageToken?: string;
    /**
     * The list of fields that matched the query.
     */
    results?: GoogleAdsSearchads360V0ResourcesSearchAds360Field[];
    /**
     * Total number of results that match the query ignoring the LIMIT clause.
     */
    totalResultsCount?: string;
}
