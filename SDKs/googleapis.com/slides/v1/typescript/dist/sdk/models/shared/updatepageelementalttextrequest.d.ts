import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Updates the alt text title and/or description of a page element.
 */
export declare class UpdatePageElementAltTextRequest extends SpeakeasyBase {
    /**
     * The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.
     */
    description?: string;
    /**
     * The object ID of the page element the updates are applied to.
     */
    objectId?: string;
    /**
     * The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element.
     */
    title?: string;
}
