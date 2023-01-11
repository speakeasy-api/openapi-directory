import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosObservabilityFeatureSpec } from "./anthosobservabilityfeaturespec";
import { CloudAuditLoggingFeatureSpec } from "./cloudauditloggingfeaturespec";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
import { FeatureSpec } from "./featurespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export declare class CommonFeatureSpec extends SpeakeasyBase {
    anthosobservability?: AnthosObservabilityFeatureSpec;
    appdevexperience?: Record<string, any>;
    cloudauditlogging?: CloudAuditLoggingFeatureSpec;
    fleetobservability?: Record<string, any>;
    multiclusteringress?: MultiClusterIngressFeatureSpec;
    workloadcertificate?: FeatureSpec;
}
