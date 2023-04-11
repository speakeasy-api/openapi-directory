import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListBranchesForHeadCommitRequest extends SpeakeasyBase {
    /**
     * commit_sha parameter
     */
    commitSha: string;
    owner: string;
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
