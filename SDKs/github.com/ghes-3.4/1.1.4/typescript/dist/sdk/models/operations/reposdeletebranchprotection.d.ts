import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposDeleteBranchProtectionRequest extends SpeakeasyBase {
    /**
     * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/enterprise-server@3.4/graphql).
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
export declare class ReposDeleteBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
