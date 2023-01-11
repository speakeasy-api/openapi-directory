import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Secrets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    secretsChoicesList(config?: AxiosRequestConfig): Promise<operations.SecretsChoicesListResponse>;
    secretsChoicesRead(req: operations.SecretsChoicesReadRequest, config?: AxiosRequestConfig): Promise<operations.SecretsChoicesReadResponse>;
    /**
     * secretsGenerateRsaKeyPairList - This endpoint can be used to generate a new RSA key pair. The keys are returned in PEM format.
     *
     *     {
     *         "public_key": "<public key>",
     *         "private_key": "<private key>"
     *     }
    **/
    secretsGenerateRsaKeyPairList(config?: AxiosRequestConfig): Promise<operations.SecretsGenerateRsaKeyPairListResponse>;
    /**
     * secretsGetSessionKeyCreate - Retrieve a temporary session key to use for encrypting and decrypting secrets via the API. The user's private RSA
     * key is POSTed with the name `private_key`. An example:
     *
     *     curl -v -X POST -H "Authorization: Token <token>" -H "Accept: application/json; indent=4" \
     *     --data-urlencode "private_key@<filename>" https://netbox/api/secrets/get-session-key/
     *
     * This request will yield a base64-encoded session key to be included in an `X-Session-Key` header in future requests:
     *
     *     {
     *         "session_key": "+8t4SI6XikgVmB5+/urhozx9O5qCQANyOk1MNe6taRf="
     *     }
     *
     * This endpoint accepts one optional parameter: `preserve_key`. If True and a session key exists, the existing session
     * key will be returned instead of a new one.
    **/
    secretsGetSessionKeyCreate(config?: AxiosRequestConfig): Promise<operations.SecretsGetSessionKeyCreateResponse>;
    secretsSecretRolesCreate(req: operations.SecretsSecretRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesCreateResponse>;
    secretsSecretRolesDelete(req: operations.SecretsSecretRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesDeleteResponse>;
    secretsSecretRolesList(req: operations.SecretsSecretRolesListRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesListResponse>;
    secretsSecretRolesPartialUpdate(req: operations.SecretsSecretRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesPartialUpdateResponse>;
    secretsSecretRolesRead(req: operations.SecretsSecretRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesReadResponse>;
    secretsSecretRolesUpdate(req: operations.SecretsSecretRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretRolesUpdateResponse>;
    secretsSecretsCreate(req: operations.SecretsSecretsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsCreateResponse>;
    secretsSecretsDelete(req: operations.SecretsSecretsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsDeleteResponse>;
    secretsSecretsList(req: operations.SecretsSecretsListRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsListResponse>;
    secretsSecretsPartialUpdate(req: operations.SecretsSecretsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsPartialUpdateResponse>;
    secretsSecretsRead(req: operations.SecretsSecretsReadRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsReadResponse>;
    secretsSecretsUpdate(req: operations.SecretsSecretsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.SecretsSecretsUpdateResponse>;
}
