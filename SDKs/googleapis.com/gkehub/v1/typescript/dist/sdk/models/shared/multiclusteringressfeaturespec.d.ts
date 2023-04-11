import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
 */
export declare class MultiClusterIngressFeatureSpec extends SpeakeasyBase {
    /**
     * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
     */
    configMembership?: string;
}
