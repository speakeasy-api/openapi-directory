import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of creating an item.
 */
export declare class CreateItemResponse extends SpeakeasyBase {
    /**
     * The ID of the created item.
     */
    itemId?: string;
    /**
     * The ID of the question created as part of this item, for a question group it lists IDs of all the questions created for this item.
     */
    questionId?: string[];
}
