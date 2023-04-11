import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate } from "./googlecloudretailv2alphamodelpageoptimizationconfigcandidate";
/**
 * An individual panel with a list of ServingConfigs to consider for it.
 */
export declare class GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel extends SpeakeasyBase {
    /**
     * Required. The candidates to consider on the panel.
     */
    candidates?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate[];
    /**
     * A candidate to consider for a given panel. Currently only ServingConfig are valid candidates.
     */
    defaultCandidate?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate;
    /**
     * Optional. The name to display for the panel.
     */
    displayName?: string;
}
