import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * State of this Pull Request. Either `open` or `closed`.
 */
export declare enum PullsUpdateRequestBodyStateEnum {
    Open = "open",
    Closed = "closed"
}
export declare class PullsUpdateRequestBody extends SpeakeasyBase {
    /**
     * The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
     */
    base?: string;
    /**
     * The contents of the pull request.
     */
    body?: string;
    /**
     * Indicates whether [maintainers can modify](https://docs.github.com/enterprise-server@3.6/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
     */
    maintainerCanModify?: boolean;
    /**
     * State of this Pull Request. Either `open` or `closed`.
     */
    state?: PullsUpdateRequestBodyStateEnum;
    /**
     * The title of the pull request.
     */
    title?: string;
}
export declare class PullsUpdateRequest extends SpeakeasyBase {
    requestBody?: PullsUpdateRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The number that identifies the pull request.
     */
    pullNumber: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class PullsUpdateResponse extends SpeakeasyBase {
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
    pullRequest?: shared.PullRequest;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
