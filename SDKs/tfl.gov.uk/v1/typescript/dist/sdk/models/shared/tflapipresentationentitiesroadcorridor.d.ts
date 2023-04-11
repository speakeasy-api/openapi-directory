import { SpeakeasyBase } from "../../../internal/utils";
export declare class TflApiPresentationEntitiesRoadCorridor extends SpeakeasyBase {
    /**
     * The Bounds of the Corridor, given by the south-east followed by the north-west co-ordinate
     *
     * @remarks
     *             pair in geoJSON format e.g. "[[-1.241531,51.242151],[1.641223,53.765721]]"
     */
    bounds?: string;
    /**
     * The display name of the Corridor e.g. "North Circular (A406)". This
     *
     * @remarks
     *             may be identical to the Id.
     */
    displayName?: string;
    /**
     * The Envelope of the Corridor, given by the corner co-ordinates of a rectangular (four-point) polygon
     *
     * @remarks
     *             in geoJSON format e.g. "[[-1.241531,51.242151],[-1.241531,53.765721],[1.641223,53.765721],[1.641223,51.242151]]"
     */
    envelope?: string;
    /**
     * The group name of the Corridor e.g. "Central London". Most corridors are not grouped, in which case this field can be null.
     */
    group?: string;
    /**
     * The Id of the Corridor e.g. "A406"
     */
    id?: string;
    /**
     * The end of the period over which status has been aggregated, or null if this is the current corridor status.
     */
    statusAggregationEndDate?: Date;
    /**
     * The start of the period over which status has been aggregated, or null if this is the current corridor status.
     */
    statusAggregationStartDate?: Date;
    /**
     * Standard multi-mode status severity code
     */
    statusSeverity?: string;
    /**
     * Description of the status severity as applied to RoadCorridors
     */
    statusSeverityDescription?: string;
    /**
     * URL to retrieve this Corridor.
     */
    url?: string;
}
