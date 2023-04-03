# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `secretmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `secretmanagerProjectsSecretsAddVersion` - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
* `secretmanagerProjectsSecretsCreate` - Creates a new Secret containing no SecretVersions.
* `secretmanagerProjectsSecretsDelete` - Deletes a Secret.
* `secretmanagerProjectsSecretsGetIamPolicy` - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
* `secretmanagerProjectsSecretsList` - Lists Secrets.
* `secretmanagerProjectsSecretsPatch` - Updates metadata of an existing Secret.
* `secretmanagerProjectsSecretsSetIamPolicy` - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
* `secretmanagerProjectsSecretsTestIamPermissions` - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `secretmanagerProjectsSecretsVersionsAccess` - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* `secretmanagerProjectsSecretsVersionsDestroy` - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* `secretmanagerProjectsSecretsVersionsDisable` - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* `secretmanagerProjectsSecretsVersionsEnable` - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* `secretmanagerProjectsSecretsVersionsGet` - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* `secretmanagerProjectsSecretsVersionsList` - Lists SecretVersions. This call does not return secret data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
