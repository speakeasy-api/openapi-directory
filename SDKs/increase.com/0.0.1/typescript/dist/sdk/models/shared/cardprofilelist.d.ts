import { SpeakeasyBase } from "../../../internal/utils";
import { CardProfile } from "./cardprofile";
/**
 * A list of Card Profile objects
 */
export declare class CardProfileList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: CardProfile[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
