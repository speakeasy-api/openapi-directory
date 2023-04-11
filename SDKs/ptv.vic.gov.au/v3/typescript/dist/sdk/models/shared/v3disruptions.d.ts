import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
export declare class V3Disruptions extends SpeakeasyBase {
    /**
     * Subset of disruption information applicable to ferry
     */
    ferry?: V3Disruption[];
    /**
     * Subset of disruption information applicable to multiple route_types
     */
    general?: V3Disruption[];
    /**
     * Subset of disruption information applicable to interstate train
     */
    interstateTrain?: V3Disruption[];
    /**
     * Subset of disruption information applicable to metropolitan bus
     */
    metroBus?: V3Disruption[];
    /**
     * Subset of disruption information applicable to metropolitan train
     */
    metroTrain?: V3Disruption[];
    /**
     * Subset of disruption information applicable to metropolitan tram
     */
    metroTram?: V3Disruption[];
    /**
     * Subset of disruption information applicable to night bus
     */
    nightBus?: V3Disruption[];
    /**
     * Subset of disruption information applicable to regional bus
     */
    regionalBus?: V3Disruption[];
    /**
     * Subset of disruption information applicable to V/Line coach
     */
    regionalCoach?: V3Disruption[];
    /**
     * Subset of disruption information applicable to V/Line train
     */
    regionalTrain?: V3Disruption[];
    /**
     * Subset of disruption information applicable to school bus
     */
    schoolBus?: V3Disruption[];
    /**
     * Subset of disruption information applicable to skybus
     */
    skybus?: V3Disruption[];
    /**
     * Subset of disruption information applicable to taxi
     */
    taxi?: V3Disruption[];
    /**
     * Subset of disruption information applicable to telebus services
     */
    telebus?: V3Disruption[];
}
