import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for returning group information from authenticators.
 */
export declare class AuthenticatorGroupsConfig extends SpeakeasyBase {
    /**
     * Whether this cluster should return group membership lookups during authentication using a group of security groups.
     */
    enabled?: boolean;
    /**
     * The name of the security group-of-groups to be used. Only relevant if enabled = true.
     */
    securityGroup?: string;
}
