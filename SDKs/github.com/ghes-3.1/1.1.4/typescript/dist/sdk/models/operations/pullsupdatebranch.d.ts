import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsUpdateBranchRequestBody extends SpeakeasyBase {
    /**
     * The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the "[List commits](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#list-commits)" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.
     */
    expectedHeadSha?: string;
}
export declare class PullsUpdateBranchRequest extends SpeakeasyBase {
    requestBody?: PullsUpdateBranchRequestBody;
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
/**
 * Response
 */
export declare class PullsUpdateBranch202ApplicationJSON extends SpeakeasyBase {
    message?: string;
    url?: string;
}
export declare class PullsUpdateBranchResponse extends SpeakeasyBase {
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
    pullsUpdateBranch202ApplicationJSONObject?: PullsUpdateBranch202ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
