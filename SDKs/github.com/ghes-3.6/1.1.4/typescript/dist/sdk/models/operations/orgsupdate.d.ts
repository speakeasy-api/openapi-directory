import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Default permission level members have for organization repositories.
 */
export declare enum OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}
/**
 * Specifies which types of repositories non-admin organization members can create.
 *
 * @remarks
 * **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
 */
export declare enum OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum {
    All = "all",
    Private = "private",
    None = "none"
}
export declare class OrgsUpdateRequestBody extends SpeakeasyBase {
    /**
     * Billing email address. This address is not publicized.
     */
    billingEmail?: string;
    blog?: string;
    /**
     * The company name.
     */
    company?: string;
    /**
     * Default permission level members have for organization repositories.
     */
    defaultRepositoryPermission?: OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum;
    /**
     * The description of the company.
     */
    description?: string;
    /**
     * The publicly visible email address.
     */
    email?: string;
    /**
     * Whether an organization can use organization projects.
     */
    hasOrganizationProjects?: boolean;
    /**
     * Whether repositories that belong to the organization can use repository projects.
     */
    hasRepositoryProjects?: boolean;
    /**
     * The location.
     */
    location?: string;
    /**
     * Specifies which types of repositories non-admin organization members can create.
     *
     * @remarks
     * **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
     */
    membersAllowedRepositoryCreationType?: OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;
    /**
     * Whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/enterprise-server@3.6/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
     */
    membersCanCreateInternalRepositories?: boolean;
    /**
     * Whether organization members can create GitHub Pages sites. Existing published sites will not be impacted.
     */
    membersCanCreatePages?: boolean;
    /**
     * Whether organization members can create private repositories, which are visible to organization members with permission. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/enterprise-server@3.6/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
     */
    membersCanCreatePrivateRepositories?: boolean;
    /**
     * Whether organization members can create public repositories, which are visible to anyone. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/enterprise-server@3.6/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
     */
    membersCanCreatePublicRepositories?: boolean;
    /**
     * Whether of non-admin organization members can create repositories. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
     */
    membersCanCreateRepositories?: boolean;
    /**
     * Whether organization members can fork private organization repositories.
     */
    membersCanForkPrivateRepositories?: boolean;
    /**
     * The shorthand name of the company.
     */
    name?: string;
    /**
     * The Twitter username of the company.
     */
    twitterUsername?: string;
    /**
     * Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface.
     */
    webCommitSignoffRequired?: boolean;
}
export declare class OrgsUpdateRequest extends SpeakeasyBase {
    requestBody?: OrgsUpdateRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Conflict
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    organizationFull?: shared.OrganizationFull;
    /**
     * Validation failed
     */
    orgsUpdate422ApplicationJSONOneOf?: any;
}
