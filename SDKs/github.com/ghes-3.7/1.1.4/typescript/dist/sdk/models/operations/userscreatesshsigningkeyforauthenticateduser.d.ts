import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersCreateSshSigningKeyForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * The public SSH key to add to your GitHub account. For more information, see "[Checking for existing SSH keys](https://docs.github.com/enterprise-server@3.7/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)."
     */
    key: string;
    /**
     * A descriptive name for the new key.
     */
    title?: string;
}
export declare class UsersCreateSshSigningKeyForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    sshSigningKey?: shared.SshSigningKey;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
