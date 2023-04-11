import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated: This field will be ignored and should not be set. Customer's billing structure.
 */
export declare enum MultiClusterIngressFeatureSpecBillingEnum {
    BillingUnspecified = "BILLING_UNSPECIFIED",
    PayAsYouGo = "PAY_AS_YOU_GO",
    AnthosLicense = "ANTHOS_LICENSE"
}
/**
 * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
 */
export declare class MultiClusterIngressFeatureSpec extends SpeakeasyBase {
    /**
     * Deprecated: This field will be ignored and should not be set. Customer's billing structure.
     */
    billing?: MultiClusterIngressFeatureSpecBillingEnum;
    /**
     * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
     */
    configMembership?: string;
}
