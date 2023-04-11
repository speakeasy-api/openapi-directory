import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
 */
export declare class WorkloadIdentityConfig extends SpeakeasyBase {
    /**
     * The workload pool to attach all Kubernetes service accounts to.
     */
    workloadPool?: string;
}
