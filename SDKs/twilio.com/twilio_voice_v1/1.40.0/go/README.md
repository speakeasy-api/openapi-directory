# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_voice_v1/1.40.0/go
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

    req := operations.CreateByocTrunkCreateByocTrunkRequest{
        CnamLookupEnabled: false,
        ConnectionPolicySid: "corrupti",
        FriendlyName: "provident",
        FromDomainSid: "distinctio",
        StatusCallbackMethod: "DELETE",
        StatusCallbackURL: "https://tidy-mascara.org",
        VoiceFallbackMethod: "POST",
        VoiceFallbackURL: "https://present-giggle.info",
        VoiceMethod: "GET",
        VoiceURL: "https://awesome-voter.biz",
    }

    ctx := context.Background()
    res, err := s.CreateByocTrunk(ctx, req, operations.CreateByocTrunkSecurity{
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

### SDK SDK

* `CreateByocTrunk`
* `CreateConnectionPolicy`
* `CreateConnectionPolicyTarget`
* `CreateDialingPermissionsCountryBulkUpdate` - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `CreateIPRecord`
* `CreateSourceIPMapping`
* `DeleteArchivedCall` - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* `DeleteByocTrunk`
* `DeleteConnectionPolicy`
* `DeleteConnectionPolicyTarget`
* `DeleteIPRecord`
* `DeleteSourceIPMapping`
* `FetchByocTrunk`
* `FetchConnectionPolicy`
* `FetchConnectionPolicyTarget`
* `FetchDialingPermissionsCountry` - Retrieve voice dialing country permissions identified by the given ISO country code
* `FetchDialingPermissionsSettings` - Retrieve voice dialing permissions inheritance for the sub-account
* `FetchIPRecord`
* `FetchSourceIPMapping`
* `ListByocTrunk`
* `ListConnectionPolicy`
* `ListConnectionPolicyTarget`
* `ListDialingPermissionsCountry` - Retrieve all voice dialing country permissions for this account
* `ListDialingPermissionsHrsPrefixes` - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `ListIPRecord`
* `ListSourceIPMapping`
* `UpdateByocTrunk`
* `UpdateConnectionPolicy`
* `UpdateConnectionPolicyTarget`
* `UpdateDialingPermissionsSettings` - Update voice dialing permissions inheritance for the sub-account
* `UpdateIPRecord`
* `UpdateSourceIPMapping`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
