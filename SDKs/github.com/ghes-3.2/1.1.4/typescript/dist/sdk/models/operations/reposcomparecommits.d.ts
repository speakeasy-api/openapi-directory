import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCompareCommitsRequest extends SpeakeasyBase {
    /**
     * The base branch and head branch to compare. This parameter expects the format `{base}...{head}`.
     */
    basehead: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Service unavailable
 */
export declare class ReposCompareCommits503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class ReposCompareCommitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    commitComparison?: shared.CommitComparison;
    /**
     * Service unavailable
     */
    reposCompareCommits503ApplicationJSONObject?: ReposCompareCommits503ApplicationJSON;
}
