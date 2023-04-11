import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateStatusCheckProtectionRequestBodyChecks extends SpeakeasyBase {
    /**
     * The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.
     */
    appId?: number;
    /**
     * The name of the required check
     */
    context: string;
}
export declare class ReposUpdateStatusCheckProtectionRequestBody extends SpeakeasyBase {
    /**
     * The list of status checks to require in order to merge into this branch.
     */
    checks?: ReposUpdateStatusCheckProtectionRequestBodyChecks[];
    /**
     * **Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.
     *
     * @remarks
     *
     */
    contexts?: string[];
    /**
     * Require branches to be up to date before merging.
     */
    strict?: boolean;
}
export declare class ReposUpdateStatusCheckProtectionRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateStatusCheckProtectionRequestBody;
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
export declare class ReposUpdateStatusCheckProtectionResponse extends SpeakeasyBase {
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
    statusCheckPolicy?: shared.StatusCheckPolicy;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
