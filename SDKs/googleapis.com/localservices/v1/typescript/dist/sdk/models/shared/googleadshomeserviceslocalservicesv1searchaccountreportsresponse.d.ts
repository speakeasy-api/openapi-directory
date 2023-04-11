import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsHomeservicesLocalservicesV1AccountReport } from "./googleadshomeserviceslocalservicesv1accountreport";
/**
 * A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
 */
export declare class GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse extends SpeakeasyBase {
    /**
     * List of account reports which maps 1:1 to a particular linked GLS account.
     */
    accountReports?: GoogleAdsHomeservicesLocalservicesV1AccountReport[];
    /**
     * Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set.
     */
    nextPageToken?: string;
}
