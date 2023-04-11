import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { CloudAuditLoggingFeatureSpec } from "./cloudauditloggingfeaturespec";
import { FeatureSpec } from "./featurespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
 */
export declare class CommonFeatureSpec extends SpeakeasyBase {
    /**
     * **Anthos Observability**: Spec
     */
    anthosobservability?: AnthosObservabilityFeatureSpec;
    /**
     * Spec for App Dev Experience Feature.
     */
    appdevexperience?: Record<string, any>;
    /**
     * **Cloud Audit Logging**: Spec for Audit Logging Allowlisting.
     */
    cloudauditlogging?: CloudAuditLoggingFeatureSpec;
    /**
     * **Fleet Observability**: The Hub-wide input for the FleetObservability feature.
     */
    fleetobservability?: Record<string, any>;
    /**
     * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
     */
    multiclusteringress?: MultiClusterIngressFeatureSpec;
    /**
     * **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
     */
    workloadcertificate?: FeatureSpec;
}
