import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposRenameBranchRequestBody extends SpeakeasyBase {
    /**
     * The new name of the branch.
     */
    newName: string;
}
export declare class ReposRenameBranchRequest extends SpeakeasyBase {
    requestBody: ReposRenameBranchRequestBody;
    /**
     * The name of the branch.
     */
    branch: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposRenameBranchResponse extends SpeakeasyBase {
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
    branchWithProtection?: shared.BranchWithProtection;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
