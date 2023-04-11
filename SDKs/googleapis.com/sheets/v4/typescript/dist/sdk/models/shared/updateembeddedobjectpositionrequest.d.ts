import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
/**
 * Update an embedded object's position (such as a moving or resizing a chart or image).
 */
export declare class UpdateEmbeddedObjectPositionRequest extends SpeakeasyBase {
    /**
     * The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * The position of an embedded object such as a chart.
     */
    newPosition?: EmbeddedObjectPosition;
    /**
     * The ID of the object to moved.
     */
    objectId?: number;
}
