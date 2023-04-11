import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes an object, either pages or page elements, from the presentation.
 */
export declare class DeleteObjectRequest extends SpeakeasyBase {
    /**
     * The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted.
     */
    objectId?: string;
}
