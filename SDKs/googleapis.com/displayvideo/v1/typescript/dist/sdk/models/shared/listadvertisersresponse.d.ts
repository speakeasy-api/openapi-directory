import { SpeakeasyBase } from "../../../internal/utils";
import { Advertiser } from "./advertiser";
/**
 * Successful response
 */
export declare class ListAdvertisersResponse extends SpeakeasyBase {
    /**
     * The list of advertisers. This list will be absent if empty.
     */
    advertisers?: Advertiser[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdvertisers` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
