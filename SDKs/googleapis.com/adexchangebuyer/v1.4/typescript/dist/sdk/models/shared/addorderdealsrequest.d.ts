import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
export declare class AddOrderDealsRequest extends SpeakeasyBase {
    /**
     * The list of deals to add
     */
    deals?: MarketplaceDeal[];
    /**
     * The last known proposal revision number.
     */
    proposalRevisionNumber?: string;
    /**
     * Indicates an optional action to take on the proposal
     */
    updateAction?: string;
}
