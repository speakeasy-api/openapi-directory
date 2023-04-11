import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Configures the access that repositories have to the organization secret. Can be one of:
 *
 * @remarks
 * \- `all` - All repositories in an organization can access the secret.
 * \- `private` - Private repositories in an organization can access the secret.
 * \- `selected` - Only specific repositories can access the secret.
 */
export declare enum ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
export declare class ActionsCreateOrUpdateOrgSecretRequestBody extends SpeakeasyBase {
    /**
     * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#get-an-organization-public-key) endpoint.
     */
    encryptedValue?: string;
    /**
     * ID of the key you used to encrypt the secret.
     */
    keyId?: string;
    /**
     * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/enterprise-server@3.0/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
     */
    selectedRepositoryIds?: string[];
    /**
     * Configures the access that repositories have to the organization secret. Can be one of:
     *
     * @remarks
     * \- `all` - All repositories in an organization can access the secret.
     * \- `private` - Private repositories in an organization can access the secret.
     * \- `selected` - Only specific repositories can access the secret.
     */
    visibility: ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
}
export declare class ActionsCreateOrUpdateOrgSecretRequest extends SpeakeasyBase {
    requestBody: ActionsCreateOrUpdateOrgSecretRequestBody;
    org: string;
    /**
     * secret_name parameter
     */
    secretName: string;
}
export declare class ActionsCreateOrUpdateOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when creating a secret
     */
    emptyObject?: Record<string, any>;
}
