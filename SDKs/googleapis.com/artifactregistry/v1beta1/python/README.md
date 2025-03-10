# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/artifactregistry/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ArtifactregistryProjectsLocationsListRequest(
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
    
res = s.projects.artifactregistry_projects_locations_list(req, operations.ArtifactregistryProjectsLocationsListSecurity(
    option1=operations.ArtifactregistryProjectsLocationsListSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.list_locations_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `artifactregistry_projects_locations_list` - Lists information about the supported locations for this service.
* `artifactregistry_projects_locations_repositories_create` - Creates a repository. The returned Operation will finish once the repository has been created. Its response will be the created Repository.
* `artifactregistry_projects_locations_repositories_files_list` - Lists files.
* `artifactregistry_projects_locations_repositories_get_iam_policy` - Gets the IAM policy for a given resource.
* `artifactregistry_projects_locations_repositories_list` - Lists repositories.
* `artifactregistry_projects_locations_repositories_packages_list` - Lists packages.
* `artifactregistry_projects_locations_repositories_packages_tags_create` - Creates a tag.
* `artifactregistry_projects_locations_repositories_packages_tags_list` - Lists tags.
* `artifactregistry_projects_locations_repositories_packages_tags_patch` - Updates a tag.
* `artifactregistry_projects_locations_repositories_packages_versions_delete` - Deletes a version and all of its content. The returned operation will complete once the version has been deleted.
* `artifactregistry_projects_locations_repositories_packages_versions_get` - Gets a version
* `artifactregistry_projects_locations_repositories_packages_versions_list` - Lists versions.
* `artifactregistry_projects_locations_repositories_set_iam_policy` - Updates the IAM policy for a given resource.
* `artifactregistry_projects_locations_repositories_test_iam_permissions` - Tests if the caller has a list of permissions on a resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
