import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * object containing information about the author.
 */
export declare class ReposDeleteFileRequestBodyAuthor extends SpeakeasyBase {
    /**
     * The email of the author (or committer) of the commit
     */
    email?: string;
    /**
     * The name of the author (or committer) of the commit
     */
    name?: string;
}
/**
 * object containing information about the committer.
 */
export declare class ReposDeleteFileRequestBodyCommitter extends SpeakeasyBase {
    /**
     * The email of the author (or committer) of the commit
     */
    email?: string;
    /**
     * The name of the author (or committer) of the commit
     */
    name?: string;
}
export declare class ReposDeleteFileRequestBody extends SpeakeasyBase {
    /**
     * object containing information about the author.
     */
    author?: ReposDeleteFileRequestBodyAuthor;
    /**
     * The branch name. Default: the repository’s default branch (usually `master`)
     */
    branch?: string;
    /**
     * object containing information about the committer.
     */
    committer?: ReposDeleteFileRequestBodyCommitter;
    /**
     * The commit message.
     */
    message: string;
    /**
     * The blob SHA of the file being replaced.
     */
    sha: string;
}
export declare class ReposDeleteFileRequest extends SpeakeasyBase {
    requestBody: ReposDeleteFileRequestBody;
    owner: string;
    /**
     * path parameter
     */
    path: string;
    repo: string;
}
/**
 * Service unavailable
 */
export declare class ReposDeleteFile503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class ReposDeleteFileResponse extends SpeakeasyBase {
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
    fileCommit?: shared.FileCommit;
    /**
     * Service unavailable
     */
    reposDeleteFile503ApplicationJSONObject?: ReposDeleteFile503ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
