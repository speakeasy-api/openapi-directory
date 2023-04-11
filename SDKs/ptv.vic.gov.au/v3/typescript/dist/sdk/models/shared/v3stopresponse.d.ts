import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopDetails } from "./v3stopdetails";
/**
 * Stop location, amenity and accessibility facility information for the specified stop (metropolitan and V/Line stations only).
 */
export declare class V3StopResponse extends SpeakeasyBase {
    /**
     * Disruption information applicable to relevant routes or stops
     */
    disruptions?: Record<string, V3Disruption>;
    status?: V3Status;
    stop?: V3StopDetails;
}
