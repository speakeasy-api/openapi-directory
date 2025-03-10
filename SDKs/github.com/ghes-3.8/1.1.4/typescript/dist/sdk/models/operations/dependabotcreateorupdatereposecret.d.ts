import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DependabotCreateOrUpdateRepoSecretRequestBody extends SpeakeasyBase {
    /**
     * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/enterprise-server@3.8/rest/reference/dependabot#get-a-repository-public-key) endpoint.
     */
    encryptedValue?: string;
    /**
     * ID of the key you used to encrypt the secret.
     */
    keyId?: string;
}
export declare class DependabotCreateOrUpdateRepoSecretRequest extends SpeakeasyBase {
    requestBody: DependabotCreateOrUpdateRepoSecretRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class DependabotCreateOrUpdateRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when creating a secret
     */
    emptyObject?: Record<string, any>;
}
