import { SpeakeasyBase } from "../../../internal/utils";
import { Advertiser } from "./advertiser";
/**
 * Advertiser List Response
 */
export declare class AdvertisersListResponse extends SpeakeasyBase {
    /**
     * Advertiser collection.
     */
    advertisers?: Advertiser[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
