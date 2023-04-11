import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesStreetSegment } from "./tflapipresentationentitiesstreetsegment";
export declare class TflApiPresentationEntitiesStreet extends SpeakeasyBase {
    /**
     * Type of road closure. Some example values:
     *
     * @remarks
     *             Open = road is open, not blocked, not closed, not restricted. It maybe that the disruption has been moved out of the carriageway.
     *             Partial Closure = road is partially blocked, closed or restricted.
     *             Full Closure = road is fully blocked or closed.
     */
    closure?: string;
    /**
     * The direction of the disruption on the street. Some example values:
     *
     * @remarks
     *             All Directions
     *             All Approaches
     *             Clockwise
     *             Anti-Clockwise
     *             Northbound
     *             Eastbound
     *             Southbound
     *             Westbound
     *             Both Directions
     */
    directions?: string;
    /**
     * Street name
     */
    name?: string;
    /**
     * Geographic description of the sections of this street that are affected.
     */
    segments?: TflApiPresentationEntitiesStreetSegment[];
    /**
     * The ID from the source system of the disruption that this street belongs to.
     */
    sourceSystemId?: number;
    /**
     * The key of the source system of the disruption that this street belongs to.
     */
    sourceSystemKey?: string;
}
