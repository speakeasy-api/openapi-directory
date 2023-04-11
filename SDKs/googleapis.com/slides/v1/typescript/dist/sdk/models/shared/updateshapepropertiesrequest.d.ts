import { SpeakeasyBase } from "../../../internal/utils";
import { ShapeProperties } from "./shapeproperties";
/**
 * Update the properties of a Shape.
 */
export declare class UpdateShapePropertiesRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `shapeProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the shape background solid fill color, set `fields` to `"shapeBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * The object ID of the shape the updates are applied to.
     */
    objectId?: string;
    /**
     * The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape.
     */
    shapeProperties?: ShapeProperties;
}
