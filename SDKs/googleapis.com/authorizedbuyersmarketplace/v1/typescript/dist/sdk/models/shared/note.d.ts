import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The role who created the note.
 */
export declare enum NoteCreatorRoleEnum {
    BuyerSellerRoleUnspecified = "BUYER_SELLER_ROLE_UNSPECIFIED",
    Buyer = "BUYER",
    Seller = "SELLER"
}
/**
 * A text note attached to the proposal to facilitate the communication between buyers and sellers.
 */
export declare class Note extends SpeakeasyBase {
    /**
     * Output only. When this note was created.
     */
    createTime?: string;
    /**
     * Output only. The role who created the note.
     */
    creatorRole?: NoteCreatorRoleEnum;
    /**
     * The text of the note. Maximum length is 1024 characters.
     */
    note?: string;
}
/**
 * A text note attached to the proposal to facilitate the communication between buyers and sellers.
 */
export declare class NoteInput extends SpeakeasyBase {
    /**
     * The text of the note. Maximum length is 1024 characters.
     */
    note?: string;
}
