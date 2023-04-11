import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Block list contains restricted words
 */
export declare class BlockList extends SpeakeasyBase {
    /**
     * Date/time of creation
     */
    createdAt?: Date;
    /**
     * Block list name
     */
    name: string;
    /**
     * Date/time of the last update
     */
    updatedAt?: Date;
    /**
     * List of words to block
     */
    words: string[];
}
