import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";
import { SlicerSpec } from "./slicerspec";
/**
 * A slicer in a sheet.
 */
export declare class Slicer extends SpeakeasyBase {
    /**
     * The position of an embedded object such as a chart.
     */
    position?: EmbeddedObjectPosition;
    /**
     * The ID of the slicer.
     */
    slicerId?: number;
    /**
     * The specifications of a slicer.
     */
    spec?: SlicerSpec;
}
