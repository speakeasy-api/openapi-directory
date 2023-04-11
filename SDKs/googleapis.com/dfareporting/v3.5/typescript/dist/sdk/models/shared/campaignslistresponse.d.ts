import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
/**
 * Campaign List Response
 */
export declare class CampaignsListResponse extends SpeakeasyBase {
    /**
     * Campaign collection.
     */
    campaigns?: Campaign[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
