import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsListFilesRequest extends SpeakeasyBase {
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
     * The number that identifies the pull request.
     */
    pullNumber: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class PullsListFilesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Internal Error
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    diffEntries?: shared.DiffEntry[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
