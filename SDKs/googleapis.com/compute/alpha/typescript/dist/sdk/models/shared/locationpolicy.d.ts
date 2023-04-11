import { SpeakeasyBase } from "../../../internal/utils";
import { LocationPolicyLocation } from "./locationpolicylocation";
/**
 * Strategy for distributing VMs across zones in a region.
 */
export declare enum LocationPolicyTargetShapeEnum {
    Any = "ANY",
    AnySingleZone = "ANY_SINGLE_ZONE",
    Balanced = "BALANCED"
}
/**
 * Configuration for location policy among multiple possible locations (e.g. preferences for zone selection among zones in a single region).
 */
export declare class LocationPolicy extends SpeakeasyBase {
    /**
     * Location configurations mapped by location name. Currently only zone names are supported and must be represented as valid internal URLs, such as zones/us-central1-a.
     */
    locations?: Record<string, LocationPolicyLocation>;
    /**
     * Strategy for distributing VMs across zones in a region.
     */
    targetShape?: LocationPolicyTargetShapeEnum;
}
