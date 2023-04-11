import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a piece of updated media
 */
export declare class UpdatedMedia extends SpeakeasyBase {
    /**
     * ID of the media
     */
    id: string;
    /**
     * Date that the media was updated
     */
    updatedTime: Date;
    /**
     * Types of updates that were made to the piece of media
     */
    updates: string[];
}
