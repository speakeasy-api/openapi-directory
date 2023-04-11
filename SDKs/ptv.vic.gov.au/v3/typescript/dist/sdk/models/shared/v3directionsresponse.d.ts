import { SpeakeasyBase } from "../../../internal/utils";
import { V3DirectionWithDescription } from "./v3directionwithdescription";
import { V3Status } from "./v3status";
/**
 * The directions that a specified route travels in.
 */
export declare class V3DirectionsResponse extends SpeakeasyBase {
    /**
     * Directions of travel of route
     */
    directions?: V3DirectionWithDescription[];
    status?: V3Status;
}
