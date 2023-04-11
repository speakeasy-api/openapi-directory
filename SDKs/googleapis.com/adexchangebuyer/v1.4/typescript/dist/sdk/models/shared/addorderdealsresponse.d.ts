import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
/**
 * Successful response
 */
export declare class AddOrderDealsResponse extends SpeakeasyBase {
    /**
     * List of deals added (in the same proposal as passed in the request)
     */
    deals?: MarketplaceDeal[];
    /**
     * The updated revision number for the proposal.
     */
    proposalRevisionNumber?: string;
}
