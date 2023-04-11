import { SpeakeasyBase } from "../../../internal/utils";
export declare class RouteResponsePathInstructions extends SpeakeasyBase {
    /**
     * The distance for this instruction, in meters.
     *
     * @remarks
     *
     */
    distance?: number;
    /**
     * Only available for roundabout instructions (sign is 6). The count of exits at which the route leaves the roundabout.
     *
     * @remarks
     *
     */
    exitNumber?: number;
    /**
     * Two indices into `points`, referring to the beginning and the end of the segment of the route
     *
     * @remarks
     * this instruction refers to.
     *
     */
    interval?: number[];
    /**
     * A number which specifies the sign to show:
     *
     * @remarks
     *
     * | sign | description  |
     * |---|---|
     * |-98| an U-turn without the knowledge if it is a right or left U-turn |
     * | -8| a left U-turn |
     * | -7| keep left |
     * | -6| **not yet used**: leave roundabout |
     * | -3| turn sharp left |
     * | -2| turn left |
     * | -1| turn slight left |
     * |  0| continue on street |
     * |  1| turn slight right |
     * |  2| turn right |
     * |  3| turn sharp right |
     * |  4| the finish instruction before the last point |
     * |  5| the instruction before a via point |
     * |  6| the instruction before entering a roundabout |
     * |  7| keep right |
     * |  8| a right U-turn |
     * |  *| **For future compatibility** it is important that all clients are able to handle also unknown instruction sign numbers
     *
     */
    sign?: number;
    /**
     * The name of the street to turn onto in order to follow the route.
     *
     * @remarks
     *
     */
    streetName?: string;
    /**
     * A description what the user has to do in order to follow the route. The language depends on the locale parameter.
     *
     * @remarks
     *
     */
    text?: string;
    /**
     * The duration for this instruction, in milliseconds.
     *
     * @remarks
     *
     */
    time?: number;
    /**
     * Only available for roundabout instructions (sign is 6). The radian of the route within the roundabout `0 < r < 2*PI` for clockwise and
     *
     * @remarks
     * `-2*PI < r < 0` for counterclockwise turns.
     *
     */
    turnAngle?: number;
}
export declare class RouteResponsePath extends SpeakeasyBase {
    /**
     * The total ascent, in meters.
     *
     * @remarks
     *
     */
    ascend?: number;
    /**
     * The bounding box of the route geometry. Format: `[minLon, minLat, maxLon, maxLat]`.
     *
     * @remarks
     *
     */
    bbox?: number[];
    /**
     * The total descent, in meters.
     *
     * @remarks
     *
     */
    descend?: number;
    /**
     * Details, as requested with the `details` parameter. Consider the value `{"street_name": [[0,2,"Frankfurter Straße"],[2,6,"Zollweg"]]}`.
     *
     * @remarks
     * In this example, the route uses two streets: The first, Frankfurter Straße, is
     * used between `points[0]` and `points[2]`, and the second, Zollweg, between `points[2]` and `points[6]`.
     * See [here](https://discuss.graphhopper.com/t/2539) for discussion.
     *
     */
    details?: Record<string, any>;
    /**
     * The total distance, in meters. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).
     *
     * @remarks
     *
     */
    distance?: number;
    /**
     * The instructions for this route. This feature is under active development, and our instructions can sometimes be misleading,
     *
     * @remarks
     * so be mindful when using them for navigation.
     *
     */
    instructions?: RouteResponsePathInstructions[];
    points?: any;
    /**
     * Whether the `points` and `snapped_waypoints` fields are polyline-encoded strings rather than JSON arrays
     *
     * @remarks
     * of coordinates. See the field description for more information on the two formats.
     *
     */
    pointsEncoded?: boolean;
    /**
     * An array of indices (zero-based), specifiying the order in which the input points are visited.
     *
     * @remarks
     * Only present if the `optimize` parameter was used.
     *
     */
    pointsOrder?: number[];
    snappedWaypoints?: any;
    /**
     * The total travel time, in milliseconds. To get this information for one 'leg' please read [this blog post](https://www.graphhopper.com/blog/2019/11/28/routing-api-using-path-details/).
     *
     * @remarks
     *
     */
    time?: number;
}
