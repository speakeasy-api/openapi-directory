import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetCommitSignatureProtectionRequest extends SpeakeasyBase {
    /**
     * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/enterprise-server@3.7/graphql).
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
export declare class ReposGetCommitSignatureProtectionResponse extends SpeakeasyBase {
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
    protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
