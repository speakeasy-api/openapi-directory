import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePolicyOrTemplate } from "./instancepolicyortemplate";
import { LocationPolicy } from "./locationpolicy";
import { NetworkPolicy } from "./networkpolicy";
import { ServiceAccount } from "./serviceaccount";
/**
 * A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
 */
export declare class AllocationPolicy extends SpeakeasyBase {
    /**
     * Describe instances that can be created by this AllocationPolicy. Only instances[0] is supported now.
     */
    instances?: InstancePolicyOrTemplate[];
    /**
     * Labels applied to all VM instances and other resources created by AllocationPolicy. Labels could be user provided or system generated. You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.
     */
    labels?: Record<string, string>;
    location?: LocationPolicy;
    /**
     * NetworkPolicy describes VM instance network configurations.
     */
    network?: NetworkPolicy;
    /**
     * Carries information about a Google Cloud service account.
     */
    serviceAccount?: ServiceAccount;
}
