import { SpeakeasyBase } from "../../../internal/utils";
import { Deal } from "./deal";
/**
 * Response message for listing deals in a proposal.
 */
export declare class ListDealsResponse extends SpeakeasyBase {
    /**
     * The list of deals.
     */
    deals?: Deal[];
    /**
     * Token to fetch the next page of results.
     */
    nextPageToken?: string;
}
