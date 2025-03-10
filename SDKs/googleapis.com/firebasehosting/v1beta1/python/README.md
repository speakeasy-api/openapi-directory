# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/firebasehosting/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FirebasehostingProjectsSitesCreateRequest(
    dollar_xgafv="2",
    site_input=shared.SiteInput(
        app_id="provident",
        labels={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
    ),
    access_token="error",
    alt="media",
    callback="suscipit",
    fields_="iure",
    key="magnam",
    oauth_token="debitis",
    parent="ipsa",
    pretty_print=False,
    quota_user="delectus",
    site_id="tempora",
    upload_type="suscipit",
    upload_protocol="molestiae",
)
    
res = s.projects.firebasehosting_projects_sites_create(req, operations.FirebasehostingProjectsSitesCreateSecurity(
    option1=operations.FirebasehostingProjectsSitesCreateSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.site is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `firebasehosting_projects_sites_create` - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* `firebasehosting_projects_sites_list` - Lists each Hosting Site associated with the specified parent Firebase project.

### sites

* `firebasehosting_sites_channels_create` - Creates a new channel in the specified site.
* `firebasehosting_sites_channels_list` - Lists the channels for the specified site. All sites have a default `live` channel.
* `firebasehosting_sites_domains_create` - Creates a domain mapping on the specified site.
* `firebasehosting_sites_domains_list` - Lists the domains for the specified site.
* `firebasehosting_sites_domains_update` - Updates the specified domain mapping, creating the mapping as if it does not exist.
* `firebasehosting_sites_releases_create` - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* `firebasehosting_sites_releases_list` - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* `firebasehosting_sites_versions_clone` - Creates a new version on the specified target site using the content of the specified version.
* `firebasehosting_sites_versions_create` - Creates a new version for the specified site.
* `firebasehosting_sites_versions_delete` - Deletes the specified version.
* `firebasehosting_sites_versions_files_list` - Lists the remaining files to be uploaded for the specified version.
* `firebasehosting_sites_versions_get` - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* `firebasehosting_sites_versions_list` - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* `firebasehosting_sites_versions_patch` -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* `firebasehosting_sites_versions_populate_files` -  Adds content files to the specified version. Each file must be under 2 GB.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
