# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/firebaserules/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebaserulesProjectsReleasesCreateRequest(
    dollar_xgafv="2",
    release_input=shared.ReleaseInput(
        name="provident",
        ruleset_name="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    name="vel",
    oauth_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.firebaserules_projects_releases_create(req, operations.FirebaserulesProjectsReleasesCreateSecurity(
    option1=operations.FirebaserulesProjectsReleasesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.release is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `firebaserules_projects_releases_create` - Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
* `firebaserules_projects_releases_get_executable` - Get the `Release` executable to use when enforcing rules.
* `firebaserules_projects_releases_list` - List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
* `firebaserules_projects_releases_patch` - Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
* `firebaserules_projects_rulesets_create` - Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
* `firebaserules_projects_rulesets_delete` - Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.
* `firebaserules_projects_rulesets_get` - Get a `Ruleset` by name including the full `Source` contents.
* `firebaserules_projects_rulesets_list` - List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
* `firebaserules_projects_test` - Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
