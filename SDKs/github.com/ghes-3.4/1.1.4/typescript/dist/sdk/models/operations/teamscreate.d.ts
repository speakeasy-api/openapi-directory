import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
 */
export declare enum TeamsCreateRequestBodyPermissionEnum {
    Pull = "pull",
    Push = "push"
}
/**
 * The level of privacy this team should have. The options are:
 *
 * @remarks
 * **For a non-nested team:**
 *  * `secret` - only visible to organization owners and members of this team.
 *  * `closed` - visible to all members of this organization.
 * Default: `secret`
 * **For a parent or child team:**
 *  * `closed` - visible to all members of this organization.
 * Default for child team: `closed`
 */
export declare enum TeamsCreateRequestBodyPrivacyEnum {
    Secret = "secret",
    Closed = "closed"
}
export declare class TeamsCreateRequestBody extends SpeakeasyBase {
    /**
     * The description of the team.
     */
    description?: string;
    /**
     * The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. LDAP synchronization must be enabled to map LDAP entries to a team. Use the "[Update LDAP mapping for a team](https://docs.github.com/enterprise-server@3.4/rest/reference/enterprise-admin#update-ldap-mapping-for-a-team)" endpoint to change the LDAP DN. For more information, see "[Using LDAP](https://docs.github.com/enterprise-server@3.4/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap#enabling-ldap-sync)."
     */
    ldapDn?: string;
    /**
     * List GitHub IDs for organization members who will become team maintainers.
     */
    maintainers?: string[];
    /**
     * The name of the team.
     */
    name: string;
    /**
     * The ID of a team to set as the parent team.
     */
    parentTeamId?: number;
    /**
     * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
     */
    permission?: TeamsCreateRequestBodyPermissionEnum;
    /**
     * The level of privacy this team should have. The options are:
     *
     * @remarks
     * **For a non-nested team:**
     *  * `secret` - only visible to organization owners and members of this team.
     *  * `closed` - visible to all members of this organization.
     * Default: `secret`
     * **For a parent or child team:**
     *  * `closed` - visible to all members of this organization.
     * Default for child team: `closed`
     */
    privacy?: TeamsCreateRequestBodyPrivacyEnum;
    /**
     * The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
     */
    repoNames?: string[];
}
export declare class TeamsCreateRequest extends SpeakeasyBase {
    requestBody: TeamsCreateRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class TeamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    teamFull?: shared.TeamFull;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
