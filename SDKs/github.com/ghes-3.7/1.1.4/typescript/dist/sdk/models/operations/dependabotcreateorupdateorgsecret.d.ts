import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
 */
export declare enum DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
export declare class DependabotCreateOrUpdateOrgSecretRequestBody extends SpeakeasyBase {
    /**
     * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/enterprise-server@3.7/rest/reference/dependabot#get-an-organization-public-key) endpoint.
     */
    encryptedValue?: string;
    /**
     * ID of the key you used to encrypt the secret.
     */
    keyId?: string;
    /**
     * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/enterprise-server@3.7/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/enterprise-server@3.7/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/enterprise-server@3.7/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret) endpoints.
     */
    selectedRepositoryIds?: string[];
    /**
     * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
     */
    visibility: DependabotCreateOrUpdateOrgSecretRequestBodyVisibilityEnum;
}
export declare class DependabotCreateOrUpdateOrgSecretRequest extends SpeakeasyBase {
    requestBody: DependabotCreateOrUpdateOrgSecretRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class DependabotCreateOrUpdateOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when creating a secret
     */
    emptyObject?: Record<string, any>;
}
