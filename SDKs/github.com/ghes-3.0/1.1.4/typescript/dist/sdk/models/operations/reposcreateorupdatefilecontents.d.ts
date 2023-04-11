import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
 */
export declare class ReposCreateOrUpdateFileContentsRequestBodyAuthor extends SpeakeasyBase {
    date?: string;
    /**
     * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
     */
    email: string;
    /**
     * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
     */
    name: string;
}
/**
 * The person that committed the file. Default: the authenticated user.
 */
export declare class ReposCreateOrUpdateFileContentsRequestBodyCommitter extends SpeakeasyBase {
    date?: string;
    /**
     * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
     */
    email: string;
    /**
     * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
     */
    name: string;
}
export declare class ReposCreateOrUpdateFileContentsRequestBody extends SpeakeasyBase {
    /**
     * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
     */
    author?: ReposCreateOrUpdateFileContentsRequestBodyAuthor;
    /**
     * The branch name. Default: the repository’s default branch (usually `master`)
     */
    branch?: string;
    /**
     * The person that committed the file. Default: the authenticated user.
     */
    committer?: ReposCreateOrUpdateFileContentsRequestBodyCommitter;
    /**
     * The new file content, using Base64 encoding.
     */
    content: string;
    /**
     * The commit message.
     */
    message: string;
    /**
     * **Required if you are updating a file**. The blob SHA of the file being replaced.
     */
    sha?: string;
}
export declare class ReposCreateOrUpdateFileContentsRequest extends SpeakeasyBase {
    requestBody: ReposCreateOrUpdateFileContentsRequestBody;
    owner: string;
    /**
     * path parameter
     */
    path: string;
    repo: string;
}
export declare class ReposCreateOrUpdateFileContentsResponse extends SpeakeasyBase {
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
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
