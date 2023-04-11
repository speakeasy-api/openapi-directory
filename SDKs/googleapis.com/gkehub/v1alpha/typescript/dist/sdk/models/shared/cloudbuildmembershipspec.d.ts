import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether it is allowed to run the privileged builds on the cluster or not.
 */
export declare enum CloudBuildMembershipSpecSecurityPolicyEnum {
    SecurityPolicyUnspecified = "SECURITY_POLICY_UNSPECIFIED",
    NonPrivileged = "NON_PRIVILEGED",
    Privileged = "PRIVILEGED"
}
/**
 * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
 */
export declare class CloudBuildMembershipSpec extends SpeakeasyBase {
    /**
     * Whether it is allowed to run the privileged builds on the cluster or not.
     */
    securityPolicy?: CloudBuildMembershipSpecSecurityPolicyEnum;
    /**
     * Version of the cloud build software on the cluster.
     */
    version?: string;
}
