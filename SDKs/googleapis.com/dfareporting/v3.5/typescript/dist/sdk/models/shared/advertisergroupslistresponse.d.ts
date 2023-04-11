import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserGroup } from "./advertisergroup";
/**
 * Advertiser Group List Response
 */
export declare class AdvertiserGroupsListResponse extends SpeakeasyBase {
    /**
     * Advertiser group collection.
     */
    advertiserGroups?: AdvertiserGroup[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
