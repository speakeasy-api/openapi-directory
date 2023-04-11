import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.
 */
export declare class MarketplaceNote extends SpeakeasyBase {
    /**
     * The role of the person (buyer/seller) creating the note. (readonly)
     */
    creatorRole?: string;
    /**
     * Notes can optionally be associated with a deal. (readonly, except on create)
     */
    dealId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote".
     */
    kind?: string;
    /**
     * The actual note to attach. (readonly, except on create)
     */
    note?: string;
    /**
     * The unique id for the note. (readonly)
     */
    noteId?: string;
    /**
     * The proposalId that a note is attached to. (readonly)
     */
    proposalId?: string;
    /**
     * If the note is associated with a proposal revision number, then store that here. (readonly, except on create)
     */
    proposalRevisionNumber?: string;
    /**
     * The timestamp (ms since epoch) that this note was created. (readonly)
     */
    timestampMs?: string;
}
