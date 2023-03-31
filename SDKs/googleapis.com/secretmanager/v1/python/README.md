# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/secretmanager/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SecretmanagerProjectsLocationsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    filter="nulla",
    key="corrupti",
    name="illum",
    oauth_token="vel",
    page_size=623564,
    page_token="deserunt",
    pretty_print=False,
    quota_user="suscipit",
    upload_type="iure",
    upload_protocol="magnam",
)
    
res = s.projects.secretmanager_projects_locations_list(req, operations.SecretmanagerProjectsLocationsListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `secretmanager_projects_locations_list` - Lists information about the supported locations for this service.
* `secretmanager_projects_secrets_add_version` - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
* `secretmanager_projects_secrets_create` - Creates a new Secret containing no SecretVersions.
* `secretmanager_projects_secrets_delete` - Deletes a Secret.
* `secretmanager_projects_secrets_get_iam_policy` - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
* `secretmanager_projects_secrets_list` - Lists Secrets.
* `secretmanager_projects_secrets_patch` - Updates metadata of an existing Secret.
* `secretmanager_projects_secrets_set_iam_policy` - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
* `secretmanager_projects_secrets_test_iam_permissions` - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `secretmanager_projects_secrets_versions_access` - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* `secretmanager_projects_secrets_versions_destroy` - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* `secretmanager_projects_secrets_versions_disable` - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* `secretmanager_projects_secrets_versions_enable` - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* `secretmanager_projects_secrets_versions_get` - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* `secretmanager_projects_secrets_versions_list` - Lists SecretVersions. This call does not return secret data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
