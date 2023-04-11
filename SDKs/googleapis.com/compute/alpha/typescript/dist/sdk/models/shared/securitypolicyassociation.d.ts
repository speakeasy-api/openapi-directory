import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class SecurityPolicyAssociation extends SpeakeasyBase {
    /**
     * The resource that the security policy is attached to.
     */
    attachmentId?: string;
    /**
     * [Output Only] The display name of the security policy of the association.
     */
    displayName?: string;
    /**
     * The name for an association.
     */
    name?: string;
    /**
     * [Output Only] The security policy ID of the association.
     */
    securityPolicyId?: string;
}
