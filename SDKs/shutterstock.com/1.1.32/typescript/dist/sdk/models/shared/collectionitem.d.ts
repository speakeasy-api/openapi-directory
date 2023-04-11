import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata about an item that is part of a collection
 */
export declare class CollectionItem extends SpeakeasyBase {
    /**
     * The date the item was added to the collection
     */
    addedTime?: Date;
    /**
     * ID of the item
     */
    id: string;
    /**
     * The media type of the item, such as image, video, or audio
     */
    mediaType?: string;
}
