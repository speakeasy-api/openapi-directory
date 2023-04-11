import { SpeakeasyBase } from "../../../internal/utils";
import { LineProperties } from "./lineproperties";
/**
 * Updates the properties of a Line.
 */
export declare class UpdateLinePropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `lineProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the line solid fill color, set `fields` to `"lineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.
     */
    lineProperties?: LineProperties;
    /**
     * The object ID of the line the update is applied to.
     */
    objectId?: string;
}
