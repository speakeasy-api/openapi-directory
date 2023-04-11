import { SpeakeasyBase } from "../../../internal/utils";
import { ImageProperties } from "./imageproperties";
/**
 * Update the properties of an Image.
 */
export declare class UpdateImagePropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `imageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the image outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * The properties of the Image.
     */
    imageProperties?: ImageProperties;
    /**
     * The object ID of the image the updates are applied to.
     */
    objectId?: string;
}
