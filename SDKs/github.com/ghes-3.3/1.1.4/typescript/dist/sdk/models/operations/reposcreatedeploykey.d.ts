import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateDeployKeyRequestBody extends SpeakeasyBase {
    /**
     * The contents of the key.
     */
    key: string;
    /**
     * If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
     *
     * @remarks
     *
     * Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://docs.github.com/enterprise-server@3.3/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://docs.github.com/enterprise-server@3.3/articles/permission-levels-for-a-user-account-repository/)."
     */
    readOnly?: boolean;
    /**
     * A name for the key.
     */
    title?: string;
}
export declare class ReposCreateDeployKeyRequest extends SpeakeasyBase {
    requestBody: ReposCreateDeployKeyRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateDeployKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    deployKey?: shared.DeployKey;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
