import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";
/**
 * Updates an embedded object's border property.
 */
export declare class UpdateEmbeddedObjectBorderRequest extends SpeakeasyBase {
    /**
     * A border along an embedded object.
     */
    border?: EmbeddedObjectBorder;
    /**
     * The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * The ID of the embedded object to update.
     */
    objectId?: number;
}
