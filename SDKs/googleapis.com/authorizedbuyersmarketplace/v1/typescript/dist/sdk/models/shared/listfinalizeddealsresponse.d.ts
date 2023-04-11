import { SpeakeasyBase } from "../../../internal/utils";
import { FinalizedDeal } from "./finalizeddeal";
/**
 * Response message for listing finalized deals.
 */
export declare class ListFinalizedDealsResponse extends SpeakeasyBase {
    /**
     * The list of finalized deals.
     */
    finalizedDeals?: FinalizedDeal[];
    /**
     * Token to fetch the next page of results.
     */
    nextPageToken?: string;
}
