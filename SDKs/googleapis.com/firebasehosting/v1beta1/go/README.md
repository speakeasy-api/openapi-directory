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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebasehostingProjectsSitesCreate(ctx, operations.FirebasehostingProjectsSitesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SiteInput: &shared.SiteInput{
            AppID: sdk.String("provident"),
            Labels: map[string]string{
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("debitis"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        SiteID: sdk.String("tempora"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.FirebasehostingProjectsSitesCreateSecurity{
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


### [Projects](docs/projects/README.md)

* [FirebasehostingProjectsSitesCreate](docs/projects/README.md#firebasehostingprojectssitescreate) - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* [FirebasehostingProjectsSitesList](docs/projects/README.md#firebasehostingprojectssiteslist) - Lists each Hosting Site associated with the specified parent Firebase project.

### [Sites](docs/sites/README.md)

* [FirebasehostingSitesChannelsCreate](docs/sites/README.md#firebasehostingsiteschannelscreate) - Creates a new channel in the specified site.
* [FirebasehostingSitesChannelsList](docs/sites/README.md#firebasehostingsiteschannelslist) - Lists the channels for the specified site. All sites have a default `live` channel.
* [FirebasehostingSitesDomainsCreate](docs/sites/README.md#firebasehostingsitesdomainscreate) - Creates a domain mapping on the specified site.
* [FirebasehostingSitesDomainsList](docs/sites/README.md#firebasehostingsitesdomainslist) - Lists the domains for the specified site.
* [FirebasehostingSitesDomainsUpdate](docs/sites/README.md#firebasehostingsitesdomainsupdate) - Updates the specified domain mapping, creating the mapping as if it does not exist.
* [FirebasehostingSitesReleasesCreate](docs/sites/README.md#firebasehostingsitesreleasescreate) - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* [FirebasehostingSitesReleasesList](docs/sites/README.md#firebasehostingsitesreleaseslist) - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* [FirebasehostingSitesVersionsClone](docs/sites/README.md#firebasehostingsitesversionsclone) - Creates a new version on the specified target site using the content of the specified version.
* [FirebasehostingSitesVersionsCreate](docs/sites/README.md#firebasehostingsitesversionscreate) - Creates a new version for the specified site.
* [FirebasehostingSitesVersionsDelete](docs/sites/README.md#firebasehostingsitesversionsdelete) - Deletes the specified version.
* [FirebasehostingSitesVersionsFilesList](docs/sites/README.md#firebasehostingsitesversionsfileslist) - Lists the remaining files to be uploaded for the specified version.
* [FirebasehostingSitesVersionsGet](docs/sites/README.md#firebasehostingsitesversionsget) - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* [FirebasehostingSitesVersionsList](docs/sites/README.md#firebasehostingsitesversionslist) - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* [FirebasehostingSitesVersionsPatch](docs/sites/README.md#firebasehostingsitesversionspatch) -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* [FirebasehostingSitesVersionsPopulateFiles](docs/sites/README.md#firebasehostingsitesversionspopulatefiles) -  Adds content files to the specified version. Each file must be under 2 GB.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
