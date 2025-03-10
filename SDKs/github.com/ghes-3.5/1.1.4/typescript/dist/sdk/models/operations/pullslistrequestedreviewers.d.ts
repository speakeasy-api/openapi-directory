import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsListRequestedReviewersRequest extends SpeakeasyBase {
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
export declare class PullsListRequestedReviewersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestReviewRequest?: shared.PullRequestReviewRequest;
}
