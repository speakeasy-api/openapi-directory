import { SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";
/**
 * The location an object is overlaid on top of a grid.
 */
export declare class OverlayPosition extends SpeakeasyBase {
    /**
     * A coordinate in a sheet. All indexes are zero-based.
     */
    anchorCell?: GridCoordinate;
    /**
     * The height of the object, in pixels. Defaults to 371.
     */
    heightPixels?: number;
    /**
     * The horizontal offset, in pixels, that the object is offset from the anchor cell.
     */
    offsetXPixels?: number;
    /**
     * The vertical offset, in pixels, that the object is offset from the anchor cell.
     */
    offsetYPixels?: number;
    /**
     * The width of the object, in pixels. Defaults to 600.
     */
    widthPixels?: number;
}
