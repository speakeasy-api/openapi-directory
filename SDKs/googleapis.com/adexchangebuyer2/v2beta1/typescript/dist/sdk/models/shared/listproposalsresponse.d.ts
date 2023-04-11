import { SpeakeasyBase } from "../../../internal/utils";
import { Proposal } from "./proposal";
/**
 * Response message for listing proposals.
 */
export declare class ListProposalsResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of proposals.
     */
    proposals?: Proposal[];
}
