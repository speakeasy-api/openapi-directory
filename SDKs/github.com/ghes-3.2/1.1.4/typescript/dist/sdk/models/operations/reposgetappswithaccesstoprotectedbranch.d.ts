import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetAppsWithAccessToProtectedBranchRequest extends SpeakeasyBase {
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
export declare class ReposGetAppsWithAccessToProtectedBranchResponse extends SpeakeasyBase {
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
    integrations?: shared.Integration[];
}
