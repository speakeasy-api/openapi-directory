import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposMergeRequestBody extends SpeakeasyBase {
    /**
     * The name of the base branch that the head will be merged into.
     */
    base: string;
    /**
     * Commit message to use for the merge commit. If omitted, a default message will be used.
     */
    commitMessage?: string;
    /**
     * The head to merge. This can be a branch name or a commit SHA1.
     */
    head: string;
}
export declare class ReposMergeRequest extends SpeakeasyBase {
    requestBody: ReposMergeRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposMergeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Successful Response (The resulting merge commit)
     */
    commit?: shared.Commit;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
