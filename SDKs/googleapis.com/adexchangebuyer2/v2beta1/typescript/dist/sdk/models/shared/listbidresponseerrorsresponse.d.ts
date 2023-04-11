import { SpeakeasyBase } from "../../../internal/utils";
import { CalloutStatusRow } from "./calloutstatusrow";
/**
 * Response message for listing all reasons that bid responses resulted in an error.
 */
export declare class ListBidResponseErrorsResponse extends SpeakeasyBase {
    /**
     * List of rows, with counts of bid responses aggregated by callout status.
     */
    calloutStatusRows?: CalloutStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
