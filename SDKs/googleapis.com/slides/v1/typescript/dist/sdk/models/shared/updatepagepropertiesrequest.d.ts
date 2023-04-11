import { SpeakeasyBase } from "../../../internal/utils";
import { PageProperties } from "./pageproperties";
/**
 * Updates the properties of a Page.
 */
export declare class UpdatePagePropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `pageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the page background solid fill color, set `fields` to `"pageBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * The object ID of the page the update is applied to.
     */
    objectId?: string;
    /**
     * The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.
     */
    pageProperties?: PageProperties;
}
