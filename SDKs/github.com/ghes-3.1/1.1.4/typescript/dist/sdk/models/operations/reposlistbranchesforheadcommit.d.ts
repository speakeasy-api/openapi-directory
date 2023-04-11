import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListBranchesForHeadCommitRequest extends SpeakeasyBase {
    /**
     * The SHA of the commit.
     */
    commitSha: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposListBranchesForHeadCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    branchShorts?: shared.BranchShort[];
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
