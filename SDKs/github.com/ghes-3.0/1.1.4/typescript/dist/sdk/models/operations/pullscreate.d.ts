import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsCreateRequestBody extends SpeakeasyBase {
    /**
     * The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
     */
    base: string;
    /**
     * The contents of the pull request.
     */
    body?: string;
    /**
     * Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://docs.github.com/en/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
     */
    draft?: boolean;
    /**
     * The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
     */
    head: string;
    issue?: number;
    /**
     * Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
     */
    maintainerCanModify?: boolean;
    /**
     * The title of the new pull request.
     */
    title?: string;
}
export declare class PullsCreateRequest extends SpeakeasyBase {
    requestBody: PullsCreateRequestBody;
    owner: string;
    repo: string;
}
export declare class PullsCreateResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    pullRequest?: shared.PullRequest;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
