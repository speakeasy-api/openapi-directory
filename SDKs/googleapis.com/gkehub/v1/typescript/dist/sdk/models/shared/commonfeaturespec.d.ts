import { SpeakeasyBase } from "../../../internal/utils";
import { MultiClusterIngressFeatureSpec } from "./multiclusteringressfeaturespec";
/**
 * CommonFeatureSpec contains Hub-wide configuration information
**/
export declare class CommonFeatureSpec extends SpeakeasyBase {
    appdevexperience?: Record<string, any>;
    fleetobservability?: Record<string, any>;
    multiclusteringress?: MultiClusterIngressFeatureSpec;
}
