import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopGeosearch } from "./v3stopgeosearch";
/**
 * All stops near the specified location.
 */
export declare class V3StopsByDistanceResponse extends SpeakeasyBase {
    /**
     * Disruption information applicable to relevant routes or stops
     */
    disruptions?: Record<string, V3Disruption>;
    status?: V3Status;
    /**
     * Train stations, tram stops, bus stops, regional coach stops or Night Bus stops
     */
    stops?: V3StopGeosearch[];
}
