import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyName } from "./policyname";
import { Resource } from "./resource";
/**
 * PolicyDelegationConfig allows google-internal teams to use IAP for apps hosted in a tenant project. Using these settings, the app can delegate permission check to happen against the linked customer project. This is only ever supposed to be used by google internal teams, hence the restriction on the proto.
 */
export declare class PolicyDelegationSettings extends SpeakeasyBase {
    /**
     * Permission to check in IAM.
     */
    iamPermission?: string;
    /**
     * The DNS name of the service (e.g. "resourcemanager.googleapis.com"). This should be the domain name part of the full resource names (see https://aip.dev/122#full-resource-names), which is usually the same as IamServiceSpec.service of the service where the resource type is defined.
     */
    iamServiceName?: string;
    /**
     * An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names.
     */
    policyName?: PolicyName;
    resource?: Resource;
}
