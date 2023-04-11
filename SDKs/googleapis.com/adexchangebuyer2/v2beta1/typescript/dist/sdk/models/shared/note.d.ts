import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The role of the person (buyer/seller) creating the note.
 */
export declare enum NoteCreatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * A proposal may be associated to several notes.
 */
export declare class Note extends SpeakeasyBase {
    /**
     * Output only. The timestamp for when this note was created.
     */
    createTime?: string;
    /**
     * Output only. The role of the person (buyer/seller) creating the note.
     */
    creatorRole?: NoteCreatorRoleEnum;
    /**
     * The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    note?: string;
    /**
     * Output only. The unique ID for the note.
     */
    noteId?: string;
    /**
     * Output only. The revision number of the proposal when the note is created.
     */
    proposalRevision?: string;
}
/**
 * A proposal may be associated to several notes.
 */
export declare class NoteInput extends SpeakeasyBase {
    /**
     * The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.
     */
    note?: string;
}
