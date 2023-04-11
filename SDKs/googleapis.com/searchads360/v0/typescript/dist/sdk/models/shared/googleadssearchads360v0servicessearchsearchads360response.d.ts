import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0ServicesCustomColumnHeader } from "./googleadssearchads360v0servicescustomcolumnheader";
import { GoogleAdsSearchads360V0ServicesSearchAds360Row } from "./googleadssearchads360v0servicessearchads360row";
/**
 * Response message for SearchAds360Service.Search.
 */
export declare class GoogleAdsSearchads360V0ServicesSearchSearchAds360Response extends SpeakeasyBase {
    /**
     * The headers of the custom columns in the results.
     */
    customColumnHeaders?: GoogleAdsSearchads360V0ServicesCustomColumnHeader[];
    /**
     * FieldMask that represents what fields were requested by the user.
     */
    fieldMask?: string;
    /**
     * Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page.
     */
    nextPageToken?: string;
    /**
     * The list of rows that matched the query.
     */
    results?: GoogleAdsSearchads360V0ServicesSearchAds360Row[];
    /**
     * A returned row from the query.
     */
    summaryRow?: GoogleAdsSearchads360V0ServicesSearchAds360Row;
    /**
     * Total number of results that match the query ignoring the LIMIT clause.
     */
    totalResultsCount?: string;
}
