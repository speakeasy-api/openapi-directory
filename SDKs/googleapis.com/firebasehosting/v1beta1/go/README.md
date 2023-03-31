# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebasehosting/v1beta1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FirebasehostingProjectsSitesCreateRequest{
        DollarXgafv: "2",
        SiteInput: &shared.SiteInput{
            AppID: "provident",
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        },
        AccessToken: "error",
        Alt: "media",
        Callback: "suscipit",
        Fields: "iure",
        Key: "magnam",
        OauthToken: "debitis",
        Parent: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        SiteID: "tempora",
        UploadType: "suscipit",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasehostingProjectsSitesCreate(ctx, req, operations.FirebasehostingProjectsSitesCreateSecurity{
        Option1: &operations.FirebasehostingProjectsSitesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Site != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `FirebasehostingProjectsSitesCreate` - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* `FirebasehostingProjectsSitesList` - Lists each Hosting Site associated with the specified parent Firebase project.

### Sites

* `FirebasehostingSitesChannelsCreate` - Creates a new channel in the specified site.
* `FirebasehostingSitesChannelsList` - Lists the channels for the specified site. All sites have a default `live` channel.
* `FirebasehostingSitesDomainsCreate` - Creates a domain mapping on the specified site.
* `FirebasehostingSitesDomainsList` - Lists the domains for the specified site.
* `FirebasehostingSitesDomainsUpdate` - Updates the specified domain mapping, creating the mapping as if it does not exist.
* `FirebasehostingSitesReleasesCreate` - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* `FirebasehostingSitesReleasesList` - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* `FirebasehostingSitesVersionsClone` - Creates a new version on the specified target site using the content of the specified version.
* `FirebasehostingSitesVersionsCreate` - Creates a new version for the specified site.
* `FirebasehostingSitesVersionsDelete` - Deletes the specified version.
* `FirebasehostingSitesVersionsFilesList` - Lists the remaining files to be uploaded for the specified version.
* `FirebasehostingSitesVersionsGet` - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* `FirebasehostingSitesVersionsList` - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* `FirebasehostingSitesVersionsPatch` -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* `FirebasehostingSitesVersionsPopulateFiles` -  Adds content files to the specified version. Each file must be under 2 GB.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
