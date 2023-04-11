import { SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";
/**
 * A single tile in the mosaic. The placement and size of the tile are configurable.
 */
export declare class Tile extends SpeakeasyBase {
    /**
     * The height of the tile, measured in grid blocks. Tiles must have a minimum height of 1.
     */
    height?: number;
    /**
     * Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
     */
    widget?: Widget;
    /**
     * The width of the tile, measured in grid blocks. Tiles must have a minimum width of 1.
     */
    width?: number;
    /**
     * The zero-indexed position of the tile in grid blocks relative to the left edge of the grid. Tiles must be contained within the specified number of columns. x_pos cannot be negative.
     */
    xPos?: number;
    /**
     * The zero-indexed position of the tile in grid blocks relative to the top edge of the grid. y_pos cannot be negative.
     */
    yPos?: number;
}
