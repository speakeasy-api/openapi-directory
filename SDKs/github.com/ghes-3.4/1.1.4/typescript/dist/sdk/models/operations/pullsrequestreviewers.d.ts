import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsRequestReviewersRequestBody2 extends SpeakeasyBase {
    /**
     * An array of user `login`s that will be requested.
     */
    reviewers?: string[];
    /**
     * An array of team `slug`s that will be requested.
     */
    teamReviewers: string[];
}
export declare class PullsRequestReviewersRequestBody1 extends SpeakeasyBase {
    /**
     * An array of user `login`s that will be requested.
     */
    reviewers: string[];
    /**
     * An array of team `slug`s that will be requested.
     */
    teamReviewers?: string[];
}
export declare class PullsRequestReviewersRequest extends SpeakeasyBase {
    requestBody?: any;
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
export declare class PullsRequestReviewersResponse extends SpeakeasyBase {
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
    pullRequestSimple?: shared.PullRequestSimple;
}
