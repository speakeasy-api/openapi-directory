import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to manage GitHub Actions using the REST API.
 */
export declare class Actions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add custom labels to a self-hosted runner for an organization
     *
     * @remarks
     * Add custom labels to a self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization} - API method documentation
     */
    actionsAddCustomLabelsToSelfHostedRunnerForOrg(req: operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse>;
    /**
     * Add custom labels to a self-hosted runner for a repository
     *
     * @remarks
     * Add custom labels to a self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository} - API method documentation
     */
    actionsAddCustomLabelsToSelfHostedRunnerForRepo(req: operations.ActionsAddCustomLabelsToSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddCustomLabelsToSelfHostedRunnerForRepoResponse>;
    /**
     * Add repository access to a self-hosted runner group in an organization
     *
     * @remarks
     * Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org`
     * scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization} - API method documentation
     */
    actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * Add selected repository to an organization secret
     *
     * @remarks
     * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#add-selected-repository-to-an-organization-secret} - API method documentation
     */
    actionsAddSelectedRepoToOrgSecret(req: operations.ActionsAddSelectedRepoToOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelectedRepoToOrgSecretResponse>;
    /**
     * Add selected repository to an organization variable
     *
     * @remarks
     * Adds a repository to an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#add-selected-repository-to-an-organization-variable} - API method documentation
     */
    actionsAddSelectedRepoToOrgVariable(req: operations.ActionsAddSelectedRepoToOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelectedRepoToOrgVariableResponse>;
    /**
     * Add a repository to a required workflow
     *
     * @remarks
     * Adds a repository to a required workflow. To use this endpoint, the required workflow must be configured to run on selected repositories.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#add-a-repository-to-selected-repositories-list-for-a-required-workflow} - API method documentation
     */
    actionsAddSelectedRepoToRequiredWorkflow(req: operations.ActionsAddSelectedRepoToRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelectedRepoToRequiredWorkflowResponse>;
    /**
     * Add a self-hosted runner to a group for an organization
     *
     * @remarks
     * Adds a self-hosted runner to a runner group configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org`
     * scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization} - API method documentation
     */
    actionsAddSelfHostedRunnerToGroupForOrg(req: operations.ActionsAddSelfHostedRunnerToGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsAddSelfHostedRunnerToGroupForOrgResponse>;
    /**
     * Cancel a workflow run
     *
     * @remarks
     * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#cancel-a-workflow-run} - API method documentation
     */
    actionsCancelWorkflowRun(req: operations.ActionsCancelWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCancelWorkflowRunResponse>;
    /**
     * Create an environment variable
     *
     * @remarks
     * Create an environment variable that you can reference in a GitHub Actions workflow.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#create-an-environment-variable} - API method documentation
     */
    actionsCreateEnvironmentVariable(req: operations.ActionsCreateEnvironmentVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateEnvironmentVariableResponse>;
    /**
     * Create or update an environment secret
     *
     * @remarks
     * Creates or updates an environment secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
     * this endpoint.
     *
     * #### Example encrypting a secret using Node.js
     *
     * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
     *
     * ```
     * const sodium = require('libsodium-wrappers')
     * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
     * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
     *
     * //Check if libsodium is ready and then proceed.
     * sodium.ready.then(() => {
     *   // Convert Secret & Base64 key to Uint8Array.
     *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
     *   let binsec = sodium.from_string(secret)
     *
     *   //Encrypt the secret using LibSodium
     *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
     *
     *   // Convert encrypted Uint8Array to Base64
     *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
     *
     *   console.log(output)
     * });
     * ```
     *
     * #### Example encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-or-update-an-environment-secret} - API method documentation
     */
    actionsCreateOrUpdateEnvironmentSecret(req: operations.ActionsCreateOrUpdateEnvironmentSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateOrUpdateEnvironmentSecretResponse>;
    /**
     * Create or update an organization secret
     *
     * @remarks
     * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
     * use this endpoint.
     *
     * #### Example encrypting a secret using Node.js
     *
     * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
     *
     * ```
     * const sodium = require('libsodium-wrappers')
     * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
     * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
     *
     * //Check if libsodium is ready and then proceed.
     * sodium.ready.then(() => {
     *   // Convert Secret & Base64 key to Uint8Array.
     *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
     *   let binsec = sodium.from_string(secret)
     *
     *   //Encrypt the secret using LibSodium
     *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
     *
     *   // Convert encrypted Uint8Array to Base64
     *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
     *
     *   console.log(output)
     * });
     * ```
     *
     * #### Example encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-or-update-an-organization-secret} - API method documentation
     */
    actionsCreateOrUpdateOrgSecret(req: operations.ActionsCreateOrUpdateOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateOrUpdateOrgSecretResponse>;
    /**
     * Create or update a repository secret
     *
     * @remarks
     * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
     * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
     * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
     * this endpoint.
     *
     * #### Example encrypting a secret using Node.js
     *
     * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
     *
     * ```
     * const sodium = require('libsodium-wrappers')
     * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
     * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
     *
     * //Check if libsodium is ready and then proceed.
     * sodium.ready.then(() => {
     *   // Convert Secret & Base64 key to Uint8Array.
     *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
     *   let binsec = sodium.from_string(secret)
     *
     *   //Encrypt the secret using LibSodium
     *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
     *
     *   // Convert encrypted Uint8Array to Base64
     *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
     *
     *   console.log(output)
     * });
     * ```
     *
     * #### Example encrypting a secret using Python
     *
     * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
     *
     * ```
     * from base64 import b64encode
     * from nacl import encoding, public
     *
     * def encrypt(public_key: str, secret_value: str) -> str:
     *   """Encrypt a Unicode string using the public key."""
     *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
     *   sealed_box = public.SealedBox(public_key)
     *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
     *   return b64encode(encrypted).decode("utf-8")
     * ```
     *
     * #### Example encrypting a secret using C#
     *
     * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
     *
     * ```
     * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
     * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
     *
     * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
     *
     * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
     * ```
     *
     * #### Example encrypting a secret using Ruby
     *
     * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
     *
     * ```ruby
     * require "rbnacl"
     * require "base64"
     *
     * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
     * public_key = RbNaCl::PublicKey.new(key)
     *
     * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
     * encrypted_secret = box.encrypt("my_secret")
     *
     * # Print the base64 encoded secret
     * puts Base64.strict_encode64(encrypted_secret)
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-or-update-a-repository-secret} - API method documentation
     */
    actionsCreateOrUpdateRepoSecret(req: operations.ActionsCreateOrUpdateRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateOrUpdateRepoSecretResponse>;
    /**
     * Create an organization variable
     *
     * @remarks
     * Creates an organization variable that you can reference in a GitHub Actions workflow.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#create-an-organization-variable} - API method documentation
     */
    actionsCreateOrgVariable(req: operations.ActionsCreateOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateOrgVariableResponse>;
    /**
     * Create a registration token for an organization
     *
     * @remarks
     * Returns a token that you can pass to the `config` script. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/octo-org --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-a-registration-token-for-an-organization} - API method documentation
     */
    actionsCreateRegistrationTokenForOrg(req: operations.ActionsCreateRegistrationTokenForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRegistrationTokenForOrgResponse>;
    /**
     * Create a registration token for a repository
     *
     * @remarks
     * Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
     * using an access token with the `repo` scope to use this endpoint.
     *
     * #### Example using registration token
     *
     * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
     *
     * ```
     * ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-a-registration-token-for-a-repository} - API method documentation
     */
    actionsCreateRegistrationTokenForRepo(req: operations.ActionsCreateRegistrationTokenForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRegistrationTokenForRepoResponse>;
    /**
     * Create a remove token for an organization
     *
     * @remarks
     * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
     * endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-a-remove-token-for-an-organization} - API method documentation
     */
    actionsCreateRemoveTokenForOrg(req: operations.ActionsCreateRemoveTokenForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRemoveTokenForOrgResponse>;
    /**
     * Create a remove token for a repository
     *
     * @remarks
     * Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * #### Example using remove token
     *
     * To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
     *
     * ```
     * ./config.sh remove --token TOKEN
     * ```
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-a-remove-token-for-a-repository} - API method documentation
     */
    actionsCreateRemoveTokenForRepo(req: operations.ActionsCreateRemoveTokenForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRemoveTokenForRepoResponse>;
    /**
     * Create a repository variable
     *
     * @remarks
     * Creates a repository variable that you can reference in a GitHub Actions workflow.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#create-a-repository-variable} - API method documentation
     */
    actionsCreateRepoVariable(req: operations.ActionsCreateRepoVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRepoVariableResponse>;
    /**
     * Create a required workflow
     *
     * @remarks
     * Create a required workflow in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-a-required-workflow} - API method documentation
     */
    actionsCreateRequiredWorkflow(req: operations.ActionsCreateRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateRequiredWorkflowResponse>;
    /**
     * Create a self-hosted runner group for an organization
     *
     * @remarks
     * Creates a new self-hosted runner group for an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization} - API method documentation
     */
    actionsCreateSelfHostedRunnerGroupForOrg(req: operations.ActionsCreateSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateSelfHostedRunnerGroupForOrgResponse>;
    /**
     * Create a workflow dispatch event
     *
     * @remarks
     * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/enterprise-server@3.8/articles/creating-a-personal-access-token-for-the-command-line)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-a-workflow-dispatch-event} - API method documentation
     */
    actionsCreateWorkflowDispatch(req: operations.ActionsCreateWorkflowDispatchRequest, config?: AxiosRequestConfig): Promise<operations.ActionsCreateWorkflowDispatchResponse>;
    /**
     * Delete a GitHub Actions cache for a repository (using a cache ID)
     *
     * @remarks
     * Deletes a GitHub Actions cache for a repository, using a cache ID.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id} - API method documentation
     */
    actionsDeleteActionsCacheById(req: operations.ActionsDeleteActionsCacheByIdRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteActionsCacheByIdResponse>;
    /**
     * Delete GitHub Actions caches for a repository (using a cache key)
     *
     * @remarks
     * Deletes one or more GitHub Actions caches for a repository, using a complete cache key. By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key} - API method documentation
     */
    actionsDeleteActionsCacheByKey(req: operations.ActionsDeleteActionsCacheByKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteActionsCacheByKeyResponse>;
    /**
     * Delete an artifact
     *
     * @remarks
     * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-an-artifact} - API method documentation
     */
    actionsDeleteArtifact(req: operations.ActionsDeleteArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteArtifactResponse>;
    /**
     * Delete an environment secret
     *
     * @remarks
     * Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-an-environment-secret} - API method documentation
     */
    actionsDeleteEnvironmentSecret(req: operations.ActionsDeleteEnvironmentSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteEnvironmentSecretResponse>;
    /**
     * Delete an environment variable
     *
     * @remarks
     * Deletes an environment variable using the variable name.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#delete-an-environment-variable} - API method documentation
     */
    actionsDeleteEnvironmentVariable(req: operations.ActionsDeleteEnvironmentVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteEnvironmentVariableResponse>;
    /**
     * Delete an organization secret
     *
     * @remarks
     * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-an-organization-secret} - API method documentation
     */
    actionsDeleteOrgSecret(req: operations.ActionsDeleteOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteOrgSecretResponse>;
    /**
     * Delete an organization variable
     *
     * @remarks
     * Deletes an organization variable using the variable name.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#delete-an-organization-variable} - API method documentation
     */
    actionsDeleteOrgVariable(req: operations.ActionsDeleteOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteOrgVariableResponse>;
    /**
     * Delete a repository secret
     *
     * @remarks
     * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-a-repository-secret} - API method documentation
     */
    actionsDeleteRepoSecret(req: operations.ActionsDeleteRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteRepoSecretResponse>;
    /**
     * Delete a repository variable
     *
     * @remarks
     * Deletes a repository variable using the variable name.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#delete-a-repository-variable} - API method documentation
     */
    actionsDeleteRepoVariable(req: operations.ActionsDeleteRepoVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteRepoVariableResponse>;
    /**
     * Delete a required workflow
     *
     * @remarks
     * Deletes a required workflow configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-a-required-workflow} - API method documentation
     */
    actionsDeleteRequiredWorkflow(req: operations.ActionsDeleteRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteRequiredWorkflowResponse>;
    /**
     * Delete a self-hosted runner from an organization
     *
     * @remarks
     * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization} - API method documentation
     */
    actionsDeleteSelfHostedRunnerFromOrg(req: operations.ActionsDeleteSelfHostedRunnerFromOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerFromOrgResponse>;
    /**
     * Delete a self-hosted runner from a repository
     *
     * @remarks
     * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
     *
     * You must authenticate using an access token with the `repo`
     * scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository} - API method documentation
     */
    actionsDeleteSelfHostedRunnerFromRepo(req: operations.ActionsDeleteSelfHostedRunnerFromRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerFromRepoResponse>;
    /**
     * Delete a self-hosted runner group from an organization
     *
     * @remarks
     * Deletes a self-hosted runner group for an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization} - API method documentation
     */
    actionsDeleteSelfHostedRunnerGroupFromOrg(req: operations.ActionsDeleteSelfHostedRunnerGroupFromOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteSelfHostedRunnerGroupFromOrgResponse>;
    /**
     * Delete a workflow run
     *
     * @remarks
     * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
     * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
     * this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-a-workflow-run} - API method documentation
     */
    actionsDeleteWorkflowRun(req: operations.ActionsDeleteWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteWorkflowRunResponse>;
    /**
     * Delete workflow run logs
     *
     * @remarks
     * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#delete-workflow-run-logs} - API method documentation
     */
    actionsDeleteWorkflowRunLogs(req: operations.ActionsDeleteWorkflowRunLogsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDeleteWorkflowRunLogsResponse>;
    /**
     * Disable a selected repository for GitHub Actions in an organization
     *
     * @remarks
     * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization} - API method documentation
     */
    actionsDisableSelectedRepositoryGithubActionsOrganization(req: operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse>;
    /**
     * Disable a workflow
     *
     * @remarks
     * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#disable-a-workflow} - API method documentation
     */
    actionsDisableWorkflow(req: operations.ActionsDisableWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDisableWorkflowResponse>;
    /**
     * Download an artifact
     *
     * @remarks
     * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
     * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
     * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#download-an-artifact} - API method documentation
     */
    actionsDownloadArtifact(req: operations.ActionsDownloadArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadArtifactResponse>;
    /**
     * Download job logs for a workflow run
     *
     * @remarks
     * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
     * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
     * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
     * have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#download-job-logs-for-a-workflow-run} - API method documentation
     */
    actionsDownloadJobLogsForWorkflowRun(req: operations.ActionsDownloadJobLogsForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadJobLogsForWorkflowRunResponse>;
    /**
     * Download workflow run attempt logs
     *
     * @remarks
     * Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
     * 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
     * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#download-workflow-run-attempt-logs} - API method documentation
     */
    actionsDownloadWorkflowRunAttemptLogs(req: operations.ActionsDownloadWorkflowRunAttemptLogsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadWorkflowRunAttemptLogsResponse>;
    /**
     * Download workflow run logs
     *
     * @remarks
     * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
     * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
     * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
     * the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#download-workflow-run-logs} - API method documentation
     */
    actionsDownloadWorkflowRunLogs(req: operations.ActionsDownloadWorkflowRunLogsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsDownloadWorkflowRunLogsResponse>;
    /**
     * Enable a selected repository for GitHub Actions in an organization
     *
     * @remarks
     * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization} - API method documentation
     */
    actionsEnableSelectedRepositoryGithubActionsOrganization(req: operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse>;
    /**
     * Enable a workflow
     *
     * @remarks
     * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#enable-a-workflow} - API method documentation
     */
    actionsEnableWorkflow(req: operations.ActionsEnableWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsEnableWorkflowResponse>;
    /**
     * List GitHub Actions caches for a repository
     *
     * @remarks
     * Lists the GitHub Actions caches for a repository.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/cache#list-github-actions-caches-for-a-repository} - API method documentation
     */
    actionsGetActionsCacheList(req: operations.ActionsGetActionsCacheListRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetActionsCacheListResponse>;
    /**
     * Get GitHub Actions cache usage for a repository
     *
     * @remarks
     * Gets GitHub Actions cache usage for a repository.
     * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-github-actions-cache-usage-for-a-repository} - API method documentation
     */
    actionsGetActionsCacheUsage(req: operations.ActionsGetActionsCacheUsageRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetActionsCacheUsageResponse>;
    /**
     * List repositories with GitHub Actions cache usage for an organization
     *
     * @remarks
     * Lists repositories and their GitHub Actions cache usage for an organization.
     * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
     * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization} - API method documentation
     */
    actionsGetActionsCacheUsageByRepoForOrg(req: operations.ActionsGetActionsCacheUsageByRepoForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetActionsCacheUsageByRepoForOrgResponse>;
    /**
     * Get GitHub Actions cache usage for an enterprise
     *
     * @remarks
     * Gets the total GitHub Actions cache usage for an enterprise.
     * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise} - API method documentation
     */
    actionsGetActionsCacheUsageForEnterprise(req: operations.ActionsGetActionsCacheUsageForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetActionsCacheUsageForEnterpriseResponse>;
    /**
     * Get GitHub Actions cache usage for an organization
     *
     * @remarks
     * Gets the total GitHub Actions cache usage for an organization.
     * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
     * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-github-actions-cache-usage-for-an-organization} - API method documentation
     */
    actionsGetActionsCacheUsageForOrg(req: operations.ActionsGetActionsCacheUsageForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetActionsCacheUsageForOrgResponse>;
    /**
     * Get GitHub Actions cache usage policy for a repository
     *
     * @remarks
     * Gets GitHub Actions cache usage policy for a repository.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-github-actions-cache-usage-policy-for-a-repository} - API method documentation
     */
    actionsGetActionsCacheUsagePolicy(req: operations.ActionsGetActionsCacheUsagePolicyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetActionsCacheUsagePolicyResponse>;
    /**
     * Get GitHub Actions cache usage policy for an enterprise
     *
     * @remarks
     * Gets the GitHub Actions cache usage policy for an enterprise.
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     * GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-github-actions-cache-usage-policy-for-an-enterprise} - API method documentation
     */
    actionsGetActionsCacheUsagePolicyForEnterprise(req: operations.ActionsGetActionsCacheUsagePolicyForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetActionsCacheUsagePolicyForEnterpriseResponse>;
    /**
     * Get allowed actions for an organization
     *
     * @remarks
     * Gets the selected actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-allowed-actions-for-an-organization} - API method documentation
     */
    actionsGetAllowedActionsOrganization(req: operations.ActionsGetAllowedActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetAllowedActionsOrganizationResponse>;
    /**
     * Get allowed actions for a repository
     *
     * @remarks
     * Gets the settings for selected actions that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-allowed-actions-for-a-repository} - API method documentation
     */
    actionsGetAllowedActionsRepository(req: operations.ActionsGetAllowedActionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetAllowedActionsRepositoryResponse>;
    /**
     * Get an artifact
     *
     * @remarks
     * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-an-artifact} - API method documentation
     */
    actionsGetArtifact(req: operations.ActionsGetArtifactRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetArtifactResponse>;
    /**
     * Get the customization template for an OIDC subject claim for a repository
     *
     * @remarks
     * Gets the customization template for an OpenID Connect (OIDC) subject claim.
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint. GitHub Apps must have the `organization_administration:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-a-repository} - API method documentation
     */
    actionsGetCustomOidcSubClaimForRepo(req: operations.ActionsGetCustomOidcSubClaimForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetCustomOidcSubClaimForRepoResponse>;
    /**
     * Get an environment public key
     *
     * @remarks
     * Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-an-environment-public-key} - API method documentation
     */
    actionsGetEnvironmentPublicKey(req: operations.ActionsGetEnvironmentPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetEnvironmentPublicKeyResponse>;
    /**
     * Get an environment secret
     *
     * @remarks
     * Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-an-environment-secret} - API method documentation
     */
    actionsGetEnvironmentSecret(req: operations.ActionsGetEnvironmentSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetEnvironmentSecretResponse>;
    /**
     * Get an environment variable
     *
     * @remarks
     * Gets a specific variable in an environment. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `environments:read` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#get-an-environment-variable} - API method documentation
     */
    actionsGetEnvironmentVariable(req: operations.ActionsGetEnvironmentVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetEnvironmentVariableResponse>;
    /**
     * Get default workflow permissions for an enterprise
     *
     * @remarks
     * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise,
     * as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
     * "[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-server@3.8/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     * GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-default-workflow-permissions-for-an-enterprise} - API method documentation
     */
    actionsGetGithubActionsDefaultWorkflowPermissionsEnterprise(req: operations.ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsDefaultWorkflowPermissionsEnterpriseResponse>;
    /**
     * Get default workflow permissions for an organization
     *
     * @remarks
     * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,
     * as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
     * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.8/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-default-workflow-permissions} - API method documentation
     */
    actionsGetGithubActionsDefaultWorkflowPermissionsOrganization(req: operations.ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsDefaultWorkflowPermissionsOrganizationResponse>;
    /**
     * Get default workflow permissions for a repository
     *
     * @remarks
     * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,
     * as well as if GitHub Actions can submit approving pull request reviews.
     * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/enterprise-server@3.8/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-default-workflow-permissions-for-a-repository} - API method documentation
     */
    actionsGetGithubActionsDefaultWorkflowPermissionsRepository(req: operations.ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsDefaultWorkflowPermissionsRepositoryResponse>;
    /**
     * Get GitHub Actions permissions for an organization
     *
     * @remarks
     * Gets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-github-actions-permissions-for-an-organization} - API method documentation
     */
    actionsGetGithubActionsPermissionsOrganization(req: operations.ActionsGetGithubActionsPermissionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsPermissionsOrganizationResponse>;
    /**
     * Get GitHub Actions permissions for a repository
     *
     * @remarks
     * Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions allowed to run in the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-github-actions-permissions-for-a-repository} - API method documentation
     */
    actionsGetGithubActionsPermissionsRepository(req: operations.ActionsGetGithubActionsPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetGithubActionsPermissionsRepositoryResponse>;
    /**
     * Get a job for a workflow run
     *
     * @remarks
     * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-job-for-a-workflow-run} - API method documentation
     */
    actionsGetJobForWorkflowRun(req: operations.ActionsGetJobForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetJobForWorkflowRunResponse>;
    /**
     * Get an organization public key
     *
     * @remarks
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-an-organization-public-key} - API method documentation
     */
    actionsGetOrgPublicKey(req: operations.ActionsGetOrgPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetOrgPublicKeyResponse>;
    /**
     * Get an organization secret
     *
     * @remarks
     * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-an-organization-secret} - API method documentation
     */
    actionsGetOrgSecret(req: operations.ActionsGetOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetOrgSecretResponse>;
    /**
     * Get an organization variable
     *
     * @remarks
     * Gets a specific variable in an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#get-an-organization-variable} - API method documentation
     */
    actionsGetOrgVariable(req: operations.ActionsGetOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetOrgVariableResponse>;
    /**
     * Get pending deployments for a workflow run
     *
     * @remarks
     * Get all deployment environments for a workflow run that are waiting for protection rules to pass.
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-pending-deployments-for-a-workflow-run} - API method documentation
     */
    actionsGetPendingDeploymentsForRun(req: operations.ActionsGetPendingDeploymentsForRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetPendingDeploymentsForRunResponse>;
    /**
     * Get a repository public key
     *
     * @remarks
     * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-repository-public-key} - API method documentation
     */
    actionsGetRepoPublicKey(req: operations.ActionsGetRepoPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoPublicKeyResponse>;
    /**
     * Get a required workflow entity for a repository
     *
     * @remarks
     * Gets a specific required workflow present in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-repository-required-workflow} - API method documentation
     */
    actionsGetRepoRequiredWorkflow(req: operations.ActionsGetRepoRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoRequiredWorkflowResponse>;
    /**
     * Get a repository secret
     *
     * @remarks
     * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-repository-secret} - API method documentation
     */
    actionsGetRepoSecret(req: operations.ActionsGetRepoSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoSecretResponse>;
    /**
     * Get a repository variable
     *
     * @remarks
     * Gets a specific variable in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#get-a-repository-variable} - API method documentation
     */
    actionsGetRepoVariable(req: operations.ActionsGetRepoVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRepoVariableResponse>;
    /**
     * Get a required workflow
     *
     * @remarks
     * Get a required workflow configured in an organization.
     *
     * You must authenticate using an access token with the `read:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-required-workflow} - API method documentation
     */
    actionsGetRequiredWorkflow(req: operations.ActionsGetRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetRequiredWorkflowResponse>;
    /**
     * Get the review history for a workflow run
     *
     * @remarks
     * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-the-review-history-for-a-workflow-run} - API method documentation
     */
    actionsGetReviewsForRun(req: operations.ActionsGetReviewsForRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetReviewsForRunResponse>;
    /**
     * Get a self-hosted runner for an organization
     *
     * @remarks
     * Gets a specific self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-self-hosted-runner-for-an-organization} - API method documentation
     */
    actionsGetSelfHostedRunnerForOrg(req: operations.ActionsGetSelfHostedRunnerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerForOrgResponse>;
    /**
     * Get a self-hosted runner for a repository
     *
     * @remarks
     * Gets a specific self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-self-hosted-runner-for-a-repository} - API method documentation
     */
    actionsGetSelfHostedRunnerForRepo(req: operations.ActionsGetSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerForRepoResponse>;
    /**
     * Get a self-hosted runner group for an organization
     *
     * @remarks
     * Gets a specific self-hosted runner group for an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization} - API method documentation
     */
    actionsGetSelfHostedRunnerGroupForOrg(req: operations.ActionsGetSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetSelfHostedRunnerGroupForOrgResponse>;
    /**
     * Get a workflow
     *
     * @remarks
     * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-workflow} - API method documentation
     */
    actionsGetWorkflow(req: operations.ActionsGetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowResponse>;
    /**
     * Get the level of access for workflows outside of the repository
     *
     * @remarks
     * Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
     * This endpoint only applies to internal and private repositories.
     * For more information, see "[Allowing access to components in a private repository](https://docs.github.com/enterprise-server@3.8/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)" and
     * "[Allowing access to components in an internal repository](https://docs.github.com/enterprise-server@3.8/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
     * repository `administration` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-workflow-access-level-to-a-repository} - API method documentation
     */
    actionsGetWorkflowAccessToRepository(req: operations.ActionsGetWorkflowAccessToRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowAccessToRepositoryResponse>;
    /**
     * Get a workflow run
     *
     * @remarks
     * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-workflow-run} - API method documentation
     */
    actionsGetWorkflowRun(req: operations.ActionsGetWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowRunResponse>;
    /**
     * Get a workflow run attempt
     *
     * @remarks
     * Gets a specific workflow run attempt. Anyone with read access to the repository
     * can use this endpoint. If the repository is private you must use an access token
     * with the `repo` scope. GitHub Apps must have the `actions:read` permission to
     * use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#get-a-workflow-run-attempt} - API method documentation
     */
    actionsGetWorkflowRunAttempt(req: operations.ActionsGetWorkflowRunAttemptRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetWorkflowRunAttemptResponse>;
    /**
     * List artifacts for a repository
     *
     * @remarks
     * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-artifacts-for-a-repository} - API method documentation
     */
    actionsListArtifactsForRepo(req: operations.ActionsListArtifactsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListArtifactsForRepoResponse>;
    /**
     * List environment secrets
     *
     * @remarks
     * Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-environment-secrets} - API method documentation
     */
    actionsListEnvironmentSecrets(req: operations.ActionsListEnvironmentSecretsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListEnvironmentSecretsResponse>;
    /**
     * List environment variables
     *
     * @remarks
     * Lists all environment variables. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `environments:read` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#list-environment-variables} - API method documentation
     */
    actionsListEnvironmentVariables(req: operations.ActionsListEnvironmentVariablesRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListEnvironmentVariablesResponse>;
    /**
     * List jobs for a workflow run
     *
     * @remarks
     * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#parameters).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-jobs-for-a-workflow-run} - API method documentation
     */
    actionsListJobsForWorkflowRun(req: operations.ActionsListJobsForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListJobsForWorkflowRunResponse>;
    /**
     * List jobs for a workflow run attempt
     *
     * @remarks
     * Lists jobs for a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#parameters).
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-jobs-for-a-workflow-run-attempt} - API method documentation
     */
    actionsListJobsForWorkflowRunAttempt(req: operations.ActionsListJobsForWorkflowRunAttemptRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListJobsForWorkflowRunAttemptResponse>;
    /**
     * List labels for a self-hosted runner for an organization
     *
     * @remarks
     * Lists all labels for a self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization} - API method documentation
     */
    actionsListLabelsForSelfHostedRunnerForOrg(req: operations.ActionsListLabelsForSelfHostedRunnerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListLabelsForSelfHostedRunnerForOrgResponse>;
    /**
     * List labels for a self-hosted runner for a repository
     *
     * @remarks
     * Lists all labels for a self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository} - API method documentation
     */
    actionsListLabelsForSelfHostedRunnerForRepo(req: operations.ActionsListLabelsForSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListLabelsForSelfHostedRunnerForRepoResponse>;
    /**
     * List organization secrets
     *
     * @remarks
     * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-organization-secrets} - API method documentation
     */
    actionsListOrgSecrets(req: operations.ActionsListOrgSecretsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListOrgSecretsResponse>;
    /**
     * List organization variables
     *
     * @remarks
     * Lists all organization variables. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#list-organization-variables} - API method documentation
     */
    actionsListOrgVariables(req: operations.ActionsListOrgVariablesRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListOrgVariablesResponse>;
    /**
     * List repository access to a self-hosted runner group in an organization
     *
     * @remarks
     * Lists the repositories with access to a self-hosted runner group configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization} - API method documentation
     */
    actionsListRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * List repository required workflows
     *
     * @remarks
     * Lists the required workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-repository-required-workflows} - API method documentation
     */
    actionsListRepoRequiredWorkflows(req: operations.ActionsListRepoRequiredWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoRequiredWorkflowsResponse>;
    /**
     * List repository secrets
     *
     * @remarks
     * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-repository-secrets} - API method documentation
     */
    actionsListRepoSecrets(req: operations.ActionsListRepoSecretsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoSecretsResponse>;
    /**
     * List repository variables
     *
     * @remarks
     * Lists all repository variables. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#list-repository-variables} - API method documentation
     */
    actionsListRepoVariables(req: operations.ActionsListRepoVariablesRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoVariablesResponse>;
    /**
     * List repository workflows
     *
     * @remarks
     * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-repository-workflows} - API method documentation
     */
    actionsListRepoWorkflows(req: operations.ActionsListRepoWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRepoWorkflowsResponse>;
    /**
     * List workflow runs for a required workflow
     *
     * @remarks
     * List all workflow runs for a required workflow. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-required-workflow-runs} - API method documentation
     */
    actionsListRequiredWorkflowRuns(req: operations.ActionsListRequiredWorkflowRunsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRequiredWorkflowRunsResponse>;
    /**
     * List required workflows
     *
     * @remarks
     * List all required workflows in an organization.
     *
     * You must authenticate using an access token with the `read:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-required-workflows} - API method documentation
     */
    actionsListRequiredWorkflows(req: operations.ActionsListRequiredWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRequiredWorkflowsResponse>;
    /**
     * List runner applications for an organization
     *
     * @remarks
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-runner-applications-for-an-organization} - API method documentation
     */
    actionsListRunnerApplicationsForOrg(req: operations.ActionsListRunnerApplicationsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRunnerApplicationsForOrgResponse>;
    /**
     * List runner applications for a repository
     *
     * @remarks
     * Lists binaries for the runner application that you can download and run.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-runner-applications-for-a-repository} - API method documentation
     */
    actionsListRunnerApplicationsForRepo(req: operations.ActionsListRunnerApplicationsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListRunnerApplicationsForRepoResponse>;
    /**
     * List selected repositories for an organization secret
     *
     * @remarks
     * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-selected-repositories-for-an-organization-secret} - API method documentation
     */
    actionsListSelectedReposForOrgSecret(req: operations.ActionsListSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedReposForOrgSecretResponse>;
    /**
     * List selected repositories for an organization variable
     *
     * @remarks
     * Lists all repositories that can access an organization variable that is available to selected repositories. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#list-selected-repositories-for-an-organization-variable} - API method documentation
     */
    actionsListSelectedReposForOrgVariable(req: operations.ActionsListSelectedReposForOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedReposForOrgVariableResponse>;
    /**
     * List selected repositories enabled for GitHub Actions in an organization
     *
     * @remarks
     * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization} - API method documentation
     */
    actionsListSelectedRepositoriesEnabledGithubActionsOrganization(req: operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse>;
    /**
     * List selected repositories for a required workflow
     *
     * @remarks
     * Lists the selected repositories that are configured for a required workflow in an organization. To use this endpoint, the required workflow must be configured to run on selected repositories.
     *
     * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-selected-repositories-required-workflows} - API method documentation https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-selected-repositories-required-workflows
     */
    actionsListSelectedRepositoriesRequiredWorkflow(req: operations.ActionsListSelectedRepositoriesRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelectedRepositoriesRequiredWorkflowResponse>;
    /**
     * List self-hosted runner groups for an organization
     *
     * @remarks
     * Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization} - API method documentation
     */
    actionsListSelfHostedRunnerGroupsForOrg(req: operations.ActionsListSelfHostedRunnerGroupsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnerGroupsForOrgResponse>;
    /**
     * List self-hosted runners for an organization
     *
     * @remarks
     * Lists all self-hosted runners configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-self-hosted-runners-for-an-organization} - API method documentation
     */
    actionsListSelfHostedRunnersForOrg(req: operations.ActionsListSelfHostedRunnersForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersForOrgResponse>;
    /**
     * List self-hosted runners for a repository
     *
     * @remarks
     * Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-self-hosted-runners-for-a-repository} - API method documentation
     */
    actionsListSelfHostedRunnersForRepo(req: operations.ActionsListSelfHostedRunnersForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersForRepoResponse>;
    /**
     * List self-hosted runners in a group for an organization
     *
     * @remarks
     * Lists self-hosted runners that are in a specific organization group.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization} - API method documentation
     */
    actionsListSelfHostedRunnersInGroupForOrg(req: operations.ActionsListSelfHostedRunnersInGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListSelfHostedRunnersInGroupForOrgResponse>;
    /**
     * List workflow run artifacts
     *
     * @remarks
     * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-workflow-run-artifacts} - API method documentation
     */
    actionsListWorkflowRunArtifacts(req: operations.ActionsListWorkflowRunArtifactsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunArtifactsResponse>;
    /**
     * List workflow runs for a workflow
     *
     * @remarks
     * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-workflow-runs} - API method documentation
     */
    actionsListWorkflowRuns(req: operations.ActionsListWorkflowRunsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunsResponse>;
    /**
     * List workflow runs for a repository
     *
     * @remarks
     * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/enterprise-server@3.8/rest/overview/resources-in-the-rest-api#parameters).
     *
     * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#list-workflow-runs-for-a-repository} - API method documentation
     */
    actionsListWorkflowRunsForRepo(req: operations.ActionsListWorkflowRunsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsListWorkflowRunsForRepoResponse>;
    /**
     * Re-run a job from a workflow run
     *
     * @remarks
     * Re-run a job and its dependent jobs in a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#re-run-job-for-workflow-run} - API method documentation
     */
    actionsReRunJobForWorkflowRun(req: operations.ActionsReRunJobForWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsReRunJobForWorkflowRunResponse>;
    /**
     * Re-run a workflow
     *
     * @remarks
     * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#re-run-a-workflow} - API method documentation
     */
    actionsReRunWorkflow(req: operations.ActionsReRunWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsReRunWorkflowResponse>;
    /**
     * Re-run failed jobs from a workflow run
     *
     * @remarks
     * Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#re-run-workflow-failed-jobs} - API method documentation
     */
    actionsReRunWorkflowFailedJobs(req: operations.ActionsReRunWorkflowFailedJobsRequest, config?: AxiosRequestConfig): Promise<operations.ActionsReRunWorkflowFailedJobsResponse>;
    /**
     * Remove all custom labels from a self-hosted runner for an organization
     *
     * @remarks
     * Remove all custom labels from a self-hosted runner configured in an
     * organization. Returns the remaining read-only labels from the runner.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization} - API method documentation
     */
    actionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrg(req: operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForOrgResponse>;
    /**
     * Remove all custom labels from a self-hosted runner for a repository
     *
     * @remarks
     * Remove all custom labels from a self-hosted runner configured in a
     * repository. Returns the remaining read-only labels from the runner.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository} - API method documentation
     */
    actionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepo(req: operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveAllCustomLabelsFromSelfHostedRunnerForRepoResponse>;
    /**
     * Remove a custom label from a self-hosted runner for an organization
     *
     * @remarks
     * Remove a custom label from a self-hosted runner configured
     * in an organization. Returns the remaining labels from the runner.
     *
     * This endpoint returns a `404 Not Found` status if the custom label is not
     * present on the runner.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization} - API method documentation
     */
    actionsRemoveCustomLabelFromSelfHostedRunnerForOrg(req: operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForOrgResponse>;
    /**
     * Remove a custom label from a self-hosted runner for a repository
     *
     * @remarks
     * Remove a custom label from a self-hosted runner configured
     * in a repository. Returns the remaining labels from the runner.
     *
     * This endpoint returns a `404 Not Found` status if the custom label is not
     * present on the runner.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository} - API method documentation
     */
    actionsRemoveCustomLabelFromSelfHostedRunnerForRepo(req: operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveCustomLabelFromSelfHostedRunnerForRepoResponse>;
    /**
     * Remove repository access to a self-hosted runner group in an organization
     *
     * @remarks
     * Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization} - API method documentation
     */
    actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * Remove selected repository from an organization secret
     *
     * @remarks
     * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-selected-repository-from-an-organization-secret} - API method documentation
     */
    actionsRemoveSelectedRepoFromOrgSecret(req: operations.ActionsRemoveSelectedRepoFromOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelectedRepoFromOrgSecretResponse>;
    /**
     * Remove selected repository from an organization variable
     *
     * @remarks
     * Removes a repository from an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#remove-selected-repository-from-an-organization-variable} - API method documentation
     */
    actionsRemoveSelectedRepoFromOrgVariable(req: operations.ActionsRemoveSelectedRepoFromOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelectedRepoFromOrgVariableResponse>;
    /**
     * Remove a selected repository from required workflow
     *
     * @remarks
     * Removes a repository from a required workflow. To use this endpoint, the required workflow must be configured to run on selected repositories.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-a-repository-from-selected-repositories-list-for-a-required-workflow} - API method documentation
     */
    actionsRemoveSelectedRepoFromRequiredWorkflow(req: operations.ActionsRemoveSelectedRepoFromRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelectedRepoFromRequiredWorkflowResponse>;
    /**
     * Remove a self-hosted runner from a group for an organization
     *
     * @remarks
     * Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization} - API method documentation
     */
    actionsRemoveSelfHostedRunnerFromGroupForOrg(req: operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsRemoveSelfHostedRunnerFromGroupForOrgResponse>;
    /**
     * Review pending deployments for a workflow run
     *
     * @remarks
     * Approve or reject pending deployments that are waiting on approval by a required reviewer.
     *
     * Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#review-pending-deployments-for-a-workflow-run} - API method documentation
     */
    actionsReviewPendingDeploymentsForRun(req: operations.ActionsReviewPendingDeploymentsForRunRequest, config?: AxiosRequestConfig): Promise<operations.ActionsReviewPendingDeploymentsForRunResponse>;
    /**
     * Set GitHub Actions cache usage policy for a repository
     *
     * @remarks
     * Sets GitHub Actions cache usage policy for a repository.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-github-actions-cache-usage-policy-for-a-repository} - API method documentation
     */
    actionsSetActionsCacheUsagePolicy(req: operations.ActionsSetActionsCacheUsagePolicyRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetActionsCacheUsagePolicyResponse>;
    /**
     * Set GitHub Actions cache usage policy for an enterprise
     *
     * @remarks
     * Sets the GitHub Actions cache usage policy for an enterprise.
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     * GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-github-actions-cache-usage-policy-for-an-enterprise} - API method documentation
     */
    actionsSetActionsCacheUsagePolicyForEnterprise(req: operations.ActionsSetActionsCacheUsagePolicyForEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetActionsCacheUsagePolicyForEnterpriseResponse>;
    /**
     * Set allowed actions for an organization
     *
     * @remarks
     * Sets the actions that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * If the organization belongs to an enterprise that has `selected` actions set at the enterprise level, then you cannot override any of the enterprise's allowed actions settings.
     *
     * To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-allowed-actions-for-an-organization} - API method documentation
     */
    actionsSetAllowedActionsOrganization(req: operations.ActionsSetAllowedActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetAllowedActionsOrganizationResponse>;
    /**
     * Set allowed actions for a repository
     *
     * @remarks
     * Sets the actions that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
     *
     * If the repository belongs to an organization or enterprise that has `selected` actions set at the organization or enterprise levels, then you cannot override any of the allowed actions settings.
     *
     * To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-allowed-actions-for-a-repository} - API method documentation
     */
    actionsSetAllowedActionsRepository(req: operations.ActionsSetAllowedActionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetAllowedActionsRepositoryResponse>;
    /**
     * Set custom labels for a self-hosted runner for an organization
     *
     * @remarks
     * Remove all previous custom labels and set the new custom labels for a specific
     * self-hosted runner configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization} - API method documentation
     */
    actionsSetCustomLabelsForSelfHostedRunnerForOrg(req: operations.ActionsSetCustomLabelsForSelfHostedRunnerForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetCustomLabelsForSelfHostedRunnerForOrgResponse>;
    /**
     * Set custom labels for a self-hosted runner for a repository
     *
     * @remarks
     * Remove all previous custom labels and set the new custom labels for a specific
     * self-hosted runner configured in a repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository} - API method documentation
     */
    actionsSetCustomLabelsForSelfHostedRunnerForRepo(req: operations.ActionsSetCustomLabelsForSelfHostedRunnerForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetCustomLabelsForSelfHostedRunnerForRepoResponse>;
    /**
     * Set the customization template for an OIDC subject claim for a repository
     *
     * @remarks
     * Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository.
     * You must authenticate using an access token with the `repo` scope to use this
     * endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository} - API method documentation
     */
    actionsSetCustomOidcSubClaimForRepo(req: operations.ActionsSetCustomOidcSubClaimForRepoRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetCustomOidcSubClaimForRepoResponse>;
    /**
     * Set default workflow permissions for an enterprise
     *
     * @remarks
     * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise, and sets
     * whether GitHub Actions can submit approving pull request reviews. For more information, see
     * "[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-server@3.8/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)."
     *
     * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
     * GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-default-workflow-permissions-for-an-enterprise} - API method documentation
     */
    actionsSetGithubActionsDefaultWorkflowPermissionsEnterprise(req: operations.ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsDefaultWorkflowPermissionsEnterpriseResponse>;
    /**
     * Set default workflow permissions for an organization
     *
     * @remarks
     * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
     * can submit approving pull request reviews. For more information, see
     * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/enterprise-server@3.8/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-default-workflow-permissions} - API method documentation
     */
    actionsSetGithubActionsDefaultWorkflowPermissionsOrganization(req: operations.ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsDefaultWorkflowPermissionsOrganizationResponse>;
    /**
     * Set default workflow permissions for a repository
     *
     * @remarks
     * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
     * can submit approving pull request reviews.
     * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/enterprise-server@3.8/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-default-workflow-permissions-for-a-repository} - API method documentation
     */
    actionsSetGithubActionsDefaultWorkflowPermissionsRepository(req: operations.ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsDefaultWorkflowPermissionsRepositoryResponse>;
    /**
     * Set GitHub Actions permissions for an organization
     *
     * @remarks
     * Sets the GitHub Actions permissions policy for repositories and allowed actions in an organization.
     *
     * If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions, then you cannot override them for the organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-github-actions-permissions-for-an-organization} - API method documentation
     */
    actionsSetGithubActionsPermissionsOrganization(req: operations.ActionsSetGithubActionsPermissionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsPermissionsOrganizationResponse>;
    /**
     * Set GitHub Actions permissions for a repository
     *
     * @remarks
     * Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions in the repository.
     *
     * If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions, then you cannot override them for the repository.
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-github-actions-permissions-for-a-repository} - API method documentation
     */
    actionsSetGithubActionsPermissionsRepository(req: operations.ActionsSetGithubActionsPermissionsRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetGithubActionsPermissionsRepositoryResponse>;
    /**
     * Set repository access for a self-hosted runner group in an organization
     *
     * @remarks
     * Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization} - API method documentation
     */
    actionsSetRepoAccessToSelfHostedRunnerGroupInOrg(req: operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse>;
    /**
     * Set selected repositories for an organization secret
     *
     * @remarks
     * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/enterprise-server@3.8/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-selected-repositories-for-an-organization-secret} - API method documentation
     */
    actionsSetSelectedReposForOrgSecret(req: operations.ActionsSetSelectedReposForOrgSecretRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedReposForOrgSecretResponse>;
    /**
     * Set selected repositories for an organization variable
     *
     * @remarks
     * Replaces all repositories for an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#set-selected-repositories-for-an-organization-variable} - API method documentation
     */
    actionsSetSelectedReposForOrgVariable(req: operations.ActionsSetSelectedReposForOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedReposForOrgVariableResponse>;
    /**
     * Sets repositories for a required workflow
     *
     * @remarks
     * Sets the repositories for a required workflow that is required for selected repositories.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-selected-repositories-for-a-required-workflow} - API method documentation
     */
    actionsSetSelectedReposToRequiredWorkflow(req: operations.ActionsSetSelectedReposToRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedReposToRequiredWorkflowResponse>;
    /**
     * Set selected repositories enabled for GitHub Actions in an organization
     *
     * @remarks
     * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization} - API method documentation
     */
    actionsSetSelectedRepositoriesEnabledGithubActionsOrganization(req: operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse>;
    /**
     * Set self-hosted runners in a group for an organization
     *
     * @remarks
     * Replaces the list of self-hosted runners that are part of an organization runner group.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization} - API method documentation
     */
    actionsSetSelfHostedRunnersInGroupForOrg(req: operations.ActionsSetSelfHostedRunnersInGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetSelfHostedRunnersInGroupForOrgResponse>;
    /**
     * Set the level of access for workflows outside of the repository
     *
     * @remarks
     * Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
     * This endpoint only applies to internal and private repositories.
     * For more information, see "[Allowing access to components in a private repository](https://docs.github.com/enterprise-server@3.8/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)" and
     * "[Allowing access to components in an internal repository](https://docs.github.com/enterprise-server@3.8/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."
     *
     * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
     * repository `administration` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#set-workflow-access-to-a-repository} - API method documentation
     */
    actionsSetWorkflowAccessToRepository(req: operations.ActionsSetWorkflowAccessToRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.ActionsSetWorkflowAccessToRepositoryResponse>;
    /**
     * Update an environment variable
     *
     * @remarks
     * Updates an environment variable that you can reference in a GitHub Actions workflow.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#update-an-environment-variable} - API method documentation
     */
    actionsUpdateEnvironmentVariable(req: operations.ActionsUpdateEnvironmentVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsUpdateEnvironmentVariableResponse>;
    /**
     * Update an organization variable
     *
     * @remarks
     * Updates an organization variable that you can reference in a GitHub Actions workflow.
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#update-an-organization-variable} - API method documentation
     */
    actionsUpdateOrgVariable(req: operations.ActionsUpdateOrgVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsUpdateOrgVariableResponse>;
    /**
     * Update a repository variable
     *
     * @remarks
     * Updates a repository variable that you can reference in a GitHub Actions workflow.
     * You must authenticate using an access token with the `repo` scope to use this endpoint.
     * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/actions/variables#update-a-repository-variable} - API method documentation
     */
    actionsUpdateRepoVariable(req: operations.ActionsUpdateRepoVariableRequest, config?: AxiosRequestConfig): Promise<operations.ActionsUpdateRepoVariableResponse>;
    /**
     * Update a required workflow
     *
     * @remarks
     * Update a required workflow in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * For more information, see "[Required Workflows](https://docs.github.com/enterprise-server@3.8/actions/using-workflows/required-workflows)."
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#update-a-required-workflow} - API method documentation
     */
    actionsUpdateRequiredWorkflow(req: operations.ActionsUpdateRequiredWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.ActionsUpdateRequiredWorkflowResponse>;
    /**
     * Update a self-hosted runner group for an organization
     *
     * @remarks
     * Updates the `name` and `visibility` of a self-hosted runner group in an organization.
     *
     * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization} - API method documentation
     */
    actionsUpdateSelfHostedRunnerGroupForOrg(req: operations.ActionsUpdateSelfHostedRunnerGroupForOrgRequest, config?: AxiosRequestConfig): Promise<operations.ActionsUpdateSelfHostedRunnerGroupForOrgResponse>;
}
