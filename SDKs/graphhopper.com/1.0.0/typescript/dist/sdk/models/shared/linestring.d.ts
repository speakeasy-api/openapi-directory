import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The geometry of the route. The format depends on the value of `points_encoded`.
 *
 * @remarks
 *
 */
export declare class LineString extends SpeakeasyBase {
    /**
     * A list of coordinate pairs or triples, `[lon,lat]` or `[lon,lat,elevation]`.
     *
     * @remarks
     *
     */
    coordinates?: number[][];
    type?: string;
}
