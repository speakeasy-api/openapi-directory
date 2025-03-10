import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
/**
 * A packed representation of a 2D grid of uniformly spaced points containing elevation data. Each point within the grid represents the altitude in meters above average sea level at that location within the tile. Elevations provided are (generally) relative to the EGM96 geoid, however some areas will be relative to NAVD88. EGM96 and NAVD88 are off by no more than 2 meters. The grid is oriented north-west to south-east, as illustrated: rows[0].a[0] rows[0].a[m] +-----------------+ | | | N | | ^ | | | | | W <-----> E | | | | | v | | S | | | +-----------------+ rows[n].a[0] rows[n].a[m] Rather than storing the altitudes directly, we store the diffs between them as integers at some requested level of precision to take advantage of integer packing. The actual altitude values a[] can be reconstructed using the scale and each row's first_altitude and altitude_diff fields. More details in go/elevation-encoding-options-for-enduro under "Recommended implementation".
 */
export declare class FirstDerivativeElevationGrid extends SpeakeasyBase {
    /**
     * A multiplier applied to the altitude fields below to extract the actual altitudes in meters from the elevation grid.
     */
    altitudeMultiplier?: number;
    /**
     * Rows of points containing altitude data making up the elevation grid. Each row is the same length. Rows are ordered from north to south. E.g: rows[0] is the north-most row, and rows[n] is the south-most row.
     */
    rows?: Row[];
}
