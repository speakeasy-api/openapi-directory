import { SpeakeasyBase } from "../../../internal/utils";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
 */
export declare class CommonFeatureSpec extends SpeakeasyBase {
    /**
     * Spec for App Dev Experience Feature.
     */
    appdevexperience?: Record<string, any>;
    /**
     * **Fleet Observability**: The Hub-wide input for the FleetObservability feature.
     */
    fleetobservability?: Record<string, any>;
    /**
     * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
     */
    multiclusteringress?: MultiClusterIngressFeatureSpec;
}
