import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceDeal } from "./marketplacedeal";
/**
 * Successful response
 */
export declare class EditAllOrderDealsResponse extends SpeakeasyBase {
    /**
     * List of all deals in the proposal after edit.
     */
    deals?: MarketplaceDeal[];
    /**
     * The latest revision number after the update has been applied.
     */
    orderRevisionNumber?: string;
}
