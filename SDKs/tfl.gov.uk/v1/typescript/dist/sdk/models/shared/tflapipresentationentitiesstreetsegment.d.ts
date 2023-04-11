import { SpeakeasyBase } from "../../../internal/utils";
export declare class TflApiPresentationEntitiesStreetSegment extends SpeakeasyBase {
    /**
     * geoJSON formatted LineString containing two latitude/longitude (WGS84) pairs that identify the start and end points of the street segment.
     */
    lineString?: string;
    /**
     * The ID from the source system of the disruption that this street belongs to.
     */
    sourceSystemId?: number;
    /**
     * The key of the source system of the disruption that this street belongs to.
     */
    sourceSystemKey?: string;
    /**
     * A 16 digit unique integer identifying a OS ITN (Ordnance Survey Integrated Transport Network) road link.
     */
    toid?: string;
}
