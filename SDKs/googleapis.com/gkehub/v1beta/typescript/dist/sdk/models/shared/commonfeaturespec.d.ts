import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export declare class CommonFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityFeatureSpec;
    appdevexperience?: Record<string, any>;
    fleetobservability?: Record<string, any>;
    multiclusteringress?: MultiClusterIngressFeatureSpec;
}
