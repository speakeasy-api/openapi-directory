import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Default permission level members have for organization repositories:
 *
 * @remarks
 * \* `read` - can pull, but not push to or administer this repository.
 * \* `write` - can pull and push, but not administer this repository.
 * \* `admin` - can pull, push, and administer this repository.
 * \* `none` - no permissions granted by default.
 */
export declare enum OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}
/**
 * Specifies which types of repositories non-admin organization members can create. Can be one of:
 *
 * @remarks
 * \* `all` - all organization members can create public and private repositories.
 * \* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.
 * \* `none` - only admin members can create repositories.
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
     * Default permission level members have for organization repositories:
     *
     * @remarks
     * \* `read` - can pull, but not push to or administer this repository.
     * \* `write` - can pull and push, but not administer this repository.
     * \* `admin` - can pull, push, and administer this repository.
     * \* `none` - no permissions granted by default.
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
     * Toggles whether an organization can use organization projects.
     */
    hasOrganizationProjects?: boolean;
    /**
     * Toggles whether repositories that belong to the organization can use repository projects.
     */
    hasRepositoryProjects?: boolean;
    /**
     * The location.
     */
    location?: string;
    /**
     * Specifies which types of repositories non-admin organization members can create. Can be one of:
     *
     * @remarks
     * \* `all` - all organization members can create public and private repositories.
     * \* `private` - members can create private repositories. This option is only available to repositories that are part of an organization on GitHub Enterprise Cloud.
     * \* `none` - only admin members can create repositories.
     * **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
     */
    membersAllowedRepositoryCreationType?: OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum;
    /**
     * Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. Can be one of:
     *
     * @remarks
     * \* `true` - all organization members can create internal repositories.
     * \* `false` - only organization owners can create internal repositories.
     * Default: `true`. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
     */
    membersCanCreateInternalRepositories?: boolean;
    /**
     * Toggles whether organization members can create GitHub Pages sites. Can be one of:
     *
     * @remarks
     * \* `true` - all organization members can create GitHub Pages sites.
     * \* `false` - no organization members can create GitHub Pages sites. Existing published sites will not be impacted.
     */
    membersCanCreatePages?: boolean;
    /**
     * Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:
     *
     * @remarks
     * \* `true` - all organization members can create private repositories.
     * \* `false` - only organization owners can create private repositories.
     * Default: `true`. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
     */
    membersCanCreatePrivateRepositories?: boolean;
    /**
     * Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:
     *
     * @remarks
     * \* `true` - all organization members can create public repositories.
     * \* `false` - only organization owners can create public repositories.
     * Default: `true`. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
     */
    membersCanCreatePublicRepositories?: boolean;
    /**
     * Toggles the ability of non-admin organization members to create repositories. Can be one of:
     *
     * @remarks
     * \* `true` - all organization members can create repositories.
     * \* `false` - only organization owners can create repositories.
     * Default: `true`
     * **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
     */
    membersCanCreateRepositories?: boolean;
    /**
     * Toggles whether organization members can fork private organization repositories. Can be one of:
     *
     * @remarks
     * \* `true` - all organization members can fork private repositories within the organization.
     * \* `false` - no organization members can fork private repositories within the organization.
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
}
export declare class OrgsUpdateRequest extends SpeakeasyBase {
    requestBody?: OrgsUpdateRequestBody;
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
