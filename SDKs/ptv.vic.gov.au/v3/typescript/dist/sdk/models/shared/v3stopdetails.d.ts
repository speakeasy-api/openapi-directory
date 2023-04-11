import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopAccessibility } from "./v3stopaccessibility";
import { V3StopAmenityDetails } from "./v3stopamenitydetails";
import { V3StopLocation } from "./v3stoplocation";
import { V3StopStaffing } from "./v3stopstaffing";
export declare class V3StopDetails extends SpeakeasyBase {
    /**
     * Disruption information identifier(s)
     */
    disruptionIds?: number[];
    /**
     * Transport mode identifier
     */
    routeType?: number;
    /**
     * Routes travelling through the stop
     */
    routes?: Record<string, any>[];
    /**
     * The definition applicable to the station_type; returns null for V/Line train
     */
    stationDescription?: string;
    /**
     * Type of metropolitan train station (i.e. "Premium", "Host" or "Unstaffed" station); returns null for V/Line train
     */
    stationType?: string;
    stopAccessibility?: V3StopAccessibility;
    stopAmenities?: V3StopAmenityDetails;
    /**
     * Stop identifier
     */
    stopId?: number;
    /**
     * Landmark in proximity of stop
     */
    stopLandmark?: string;
    stopLocation?: V3StopLocation;
    /**
     * Name of stop
     */
    stopName?: string;
    stopStaffing?: V3StopStaffing;
}
