import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyAssociation } from "./securitypolicyassociation";
/**
 * Successful response
 */
export declare class OrganizationSecurityPoliciesListAssociationsResponse extends SpeakeasyBase {
    /**
     * A list of associations.
     */
    associations?: SecurityPolicyAssociation[];
    /**
     * [Output Only] Type of securityPolicy associations. Always compute#organizationSecurityPoliciesListAssociations for lists of securityPolicy associations.
     */
    kind?: string;
}
