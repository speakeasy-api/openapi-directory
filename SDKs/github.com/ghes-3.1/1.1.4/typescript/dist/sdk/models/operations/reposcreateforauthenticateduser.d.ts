import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * Whether to allow merge commits for pull requests.
     */
    allowMergeCommit?: boolean;
    /**
     * Whether to allow rebase merges for pull requests.
     */
    allowRebaseMerge?: boolean;
    /**
     * Whether to allow squash merges for pull requests.
     */
    allowSquashMerge?: boolean;
    /**
     * Whether the repository is initialized with a minimal README.
     */
    autoInit?: boolean;
    /**
     * Whether to delete head branches when pull requests are merged
     */
    deleteBranchOnMerge?: boolean;
    /**
     * A short description of the repository.
     */
    description?: string;
    /**
     * The desired language or platform to apply to the .gitignore.
     */
    gitignoreTemplate?: string;
    /**
     * Whether downloads are enabled.
     */
    hasDownloads?: boolean;
    /**
     * Whether issues are enabled.
     */
    hasIssues?: boolean;
    /**
     * Whether projects are enabled.
     */
    hasProjects?: boolean;
    /**
     * Whether the wiki is enabled.
     */
    hasWiki?: boolean;
    /**
     * A URL with more information about the repository.
     */
    homepage?: string;
    /**
     * Whether this repository acts as a template that can be used to generate new repositories.
     */
    isTemplate?: boolean;
    /**
     * The license keyword of the open source license for this repository.
     */
    licenseTemplate?: string;
    /**
     * The name of the repository.
     */
    name: string;
    /**
     * Whether the repository is private.
     */
    private?: boolean;
    /**
     * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
     */
    teamId?: number;
}
export declare class ReposCreateForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    repository?: shared.Repository;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
