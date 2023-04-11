import { SpeakeasyBase } from "../../../internal/utils";
import { SlicerSpec } from "./slicerspec";
/**
 * Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
 */
export declare class UpdateSlicerSpecRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * The id of the slicer to update.
     */
    slicerId?: number;
    /**
     * The specifications of a slicer.
     */
    spec?: SlicerSpec;
}
