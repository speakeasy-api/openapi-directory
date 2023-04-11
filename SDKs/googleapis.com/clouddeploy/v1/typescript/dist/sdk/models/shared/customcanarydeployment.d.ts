import { SpeakeasyBase } from "../../../internal/utils";
import { PhaseConfig } from "./phaseconfig";
/**
 * CustomCanaryDeployment represents the custom canary deployment configuration.
 */
export declare class CustomCanaryDeployment extends SpeakeasyBase {
    /**
     * Required. Configuration for each phase in the canary deployment in the order executed.
     */
    phaseConfigs?: PhaseConfig[];
}
