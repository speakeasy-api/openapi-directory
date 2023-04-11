import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceNote } from "./marketplacenote";
export declare class AddOrderNotesRequest extends SpeakeasyBase {
    /**
     * The list of notes to add.
     */
    notes?: MarketplaceNote[];
}
