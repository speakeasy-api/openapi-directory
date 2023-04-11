import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsGetRequest extends SpeakeasyBase {
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
 * Service unavailable
 */
export declare class PullsGet503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class PullsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Pass the appropriate [media type](https://docs.github.com/enterprise-server@3.2/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     */
    pullRequest?: shared.PullRequest;
    /**
     * Service unavailable
     */
    pullsGet503ApplicationJSONObject?: PullsGet503ApplicationJSON;
}
