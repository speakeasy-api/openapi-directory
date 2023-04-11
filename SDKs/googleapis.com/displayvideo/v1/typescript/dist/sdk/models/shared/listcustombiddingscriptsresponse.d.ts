import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingScript } from "./custombiddingscript";
/**
 * Successful response
 */
export declare class ListCustomBiddingScriptsResponse extends SpeakeasyBase {
    /**
     * The list of custom bidding scripts. This list will be absent if empty.
     */
    customBiddingScripts?: CustomBiddingScript[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingScriptsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page.
     */
    nextPageToken?: string;
}
