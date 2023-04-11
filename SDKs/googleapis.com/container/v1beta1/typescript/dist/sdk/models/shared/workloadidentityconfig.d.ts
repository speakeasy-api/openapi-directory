import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
 */
export declare class WorkloadIdentityConfig extends SpeakeasyBase {
    /**
     * IAM Identity Namespace to attach all Kubernetes Service Accounts to.
     */
    identityNamespace?: string;
    /**
     * identity provider is the third party identity provider.
     */
    identityProvider?: string;
    /**
     * The workload pool to attach all Kubernetes service accounts to.
     */
    workloadPool?: string;
}
