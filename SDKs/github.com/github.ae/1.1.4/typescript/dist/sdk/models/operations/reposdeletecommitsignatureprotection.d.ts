import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposDeleteCommitSignatureProtectionRequest extends SpeakeasyBase {
    /**
     * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/github-ae@latest/graphql).
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
export declare class ReposDeleteCommitSignatureProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
