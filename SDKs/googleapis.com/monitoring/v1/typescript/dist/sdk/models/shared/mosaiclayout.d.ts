import { SpeakeasyBase } from "../../../internal/utils";
import { Tile } from "./tile";
/**
 * A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.
 */
export declare class MosaicLayout extends SpeakeasyBase {
    /**
     * The number of columns in the mosaic grid. The number of columns must be between 1 and 12, inclusive.
     */
    columns?: number;
    /**
     * The tiles to display.
     */
    tiles?: Tile[];
}
