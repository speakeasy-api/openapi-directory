# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_voice_v1/1.43.0/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateByocTrunk(ctx, operations.CreateByocTrunkCreateByocTrunkRequest{
        CnamLookupEnabled: sdk.Bool(false),
        ConnectionPolicySid: sdk.String("corrupti"),
        FriendlyName: sdk.String("provident"),
        FromDomainSid: sdk.String("distinctio"),
        StatusCallbackMethod: operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnumDelete.ToPointer(),
        StatusCallbackURL: sdk.String("https://tidy-mascara.org"),
        VoiceFallbackMethod: operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnumPost.ToPointer(),
        VoiceFallbackURL: sdk.String("https://present-giggle.info"),
        VoiceMethod: operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnumGet.ToPointer(),
        VoiceURL: sdk.String("https://awesome-voter.biz"),
    }, operations.CreateByocTrunkSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateByocTrunk](docs/sdk/README.md#createbyoctrunk)
* [CreateConnectionPolicy](docs/sdk/README.md#createconnectionpolicy)
* [CreateConnectionPolicyTarget](docs/sdk/README.md#createconnectionpolicytarget)
* [CreateDialingPermissionsCountryBulkUpdate](docs/sdk/README.md#createdialingpermissionscountrybulkupdate) - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [CreateIPRecord](docs/sdk/README.md#createiprecord)
* [CreateSourceIPMapping](docs/sdk/README.md#createsourceipmapping)
* [DeleteArchivedCall](docs/sdk/README.md#deletearchivedcall) - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* [DeleteByocTrunk](docs/sdk/README.md#deletebyoctrunk)
* [DeleteConnectionPolicy](docs/sdk/README.md#deleteconnectionpolicy)
* [DeleteConnectionPolicyTarget](docs/sdk/README.md#deleteconnectionpolicytarget)
* [DeleteIPRecord](docs/sdk/README.md#deleteiprecord)
* [DeleteSourceIPMapping](docs/sdk/README.md#deletesourceipmapping)
* [FetchByocTrunk](docs/sdk/README.md#fetchbyoctrunk)
* [FetchConnectionPolicy](docs/sdk/README.md#fetchconnectionpolicy)
* [FetchConnectionPolicyTarget](docs/sdk/README.md#fetchconnectionpolicytarget)
* [FetchDialingPermissionsCountry](docs/sdk/README.md#fetchdialingpermissionscountry) - Retrieve voice dialing country permissions identified by the given ISO country code
* [FetchDialingPermissionsSettings](docs/sdk/README.md#fetchdialingpermissionssettings) - Retrieve voice dialing permissions inheritance for the sub-account
* [FetchIPRecord](docs/sdk/README.md#fetchiprecord)
* [FetchSourceIPMapping](docs/sdk/README.md#fetchsourceipmapping)
* [ListByocTrunk](docs/sdk/README.md#listbyoctrunk)
* [ListConnectionPolicy](docs/sdk/README.md#listconnectionpolicy)
* [ListConnectionPolicyTarget](docs/sdk/README.md#listconnectionpolicytarget)
* [ListDialingPermissionsCountry](docs/sdk/README.md#listdialingpermissionscountry) - Retrieve all voice dialing country permissions for this account
* [ListDialingPermissionsHrsPrefixes](docs/sdk/README.md#listdialingpermissionshrsprefixes) - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [ListIPRecord](docs/sdk/README.md#listiprecord)
* [ListSourceIPMapping](docs/sdk/README.md#listsourceipmapping)
* [UpdateByocTrunk](docs/sdk/README.md#updatebyoctrunk)
* [UpdateConnectionPolicy](docs/sdk/README.md#updateconnectionpolicy)
* [UpdateConnectionPolicyTarget](docs/sdk/README.md#updateconnectionpolicytarget)
* [UpdateDialingPermissionsSettings](docs/sdk/README.md#updatedialingpermissionssettings) - Update voice dialing permissions inheritance for the sub-account
* [UpdateIPRecord](docs/sdk/README.md#updateiprecord)
* [UpdateSourceIPMapping](docs/sdk/README.md#updatesourceipmapping)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
