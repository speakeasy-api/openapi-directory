import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Block list contains restricted words
 */
export declare class CreateBlockListRequest extends SpeakeasyBase {
    /**
     * Block list name
     */
    name: string;
    /**
     * List of words to block
     */
    words: string[];
}
