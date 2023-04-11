import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceNote } from "./marketplacenote";
/**
 * Successful response
 */
export declare class GetOrderNotesResponse extends SpeakeasyBase {
    /**
     * The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first.
     */
    notes?: MarketplaceNote[];
}
