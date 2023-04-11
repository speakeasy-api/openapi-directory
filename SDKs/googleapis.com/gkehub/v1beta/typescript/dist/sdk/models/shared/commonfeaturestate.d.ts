import { SpeakeasyBase } from "../../../internal/utils";
import { AppDevExperienceFeatureState } from "./appdevexperiencefeaturestate";
import { FeatureState } from "./featurestate";
/**
 * CommonFeatureState contains Hub-wide Feature status information.
 */
export declare class CommonFeatureState extends SpeakeasyBase {
    /**
     * State for App Dev Exp Feature.
     */
    appdevexperience?: AppDevExperienceFeatureState;
    /**
     * **FleetObservability**: An empty state left as an example Hub-wide Feature state.
     */
    fleetobservability?: Record<string, any>;
    /**
     * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
     */
    state?: FeatureState;
}
