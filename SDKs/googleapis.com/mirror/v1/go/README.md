# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/mirror/v1/go
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
    res, err := s.Accounts.MirrorAccountsInsert(ctx, operations.MirrorAccountsInsertRequest{
        Account: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: sdk.String("provident"),
                    Type: sdk.String("distinctio"),
                },
                shared.AuthToken{
                    AuthToken: sdk.String("quibusdam"),
                    Type: sdk.String("unde"),
                },
                shared.AuthToken{
                    AuthToken: sdk.String("nulla"),
                    Type: sdk.String("corrupti"),
                },
            },
            Features: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Password: sdk.String("iure"),
            UserData: []shared.UserData{
                shared.UserData{
                    Key: sdk.String("debitis"),
                    Value: sdk.String("ipsa"),
                },
                shared.UserData{
                    Key: sdk.String("delectus"),
                    Value: sdk.String("tempora"),
                },
            },
        },
        AccountName: "suscipit",
        AccountType: "molestiae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UserIP: sdk.String("excepturi"),
        UserToken: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [MirrorAccountsInsert](docs/accounts/README.md#mirroraccountsinsert) - Inserts a new account for a user

### [Contacts](docs/contacts/README.md)

* [MirrorContactsDelete](docs/contacts/README.md#mirrorcontactsdelete) - Deletes a contact.
* [MirrorContactsGet](docs/contacts/README.md#mirrorcontactsget) - Gets a single contact by ID.
* [MirrorContactsInsert](docs/contacts/README.md#mirrorcontactsinsert) - Inserts a new contact.
* [MirrorContactsList](docs/contacts/README.md#mirrorcontactslist) - Retrieves a list of contacts for the authenticated user.
* [MirrorContactsPatch](docs/contacts/README.md#mirrorcontactspatch) - Updates a contact in place. This method supports patch semantics.
* [MirrorContactsUpdate](docs/contacts/README.md#mirrorcontactsupdate) - Updates a contact in place.

### [Locations](docs/locations/README.md)

* [MirrorLocationsGet](docs/locations/README.md#mirrorlocationsget) - Gets a single location by ID.
* [MirrorLocationsList](docs/locations/README.md#mirrorlocationslist) - Retrieves a list of locations for the user.

### [Settings](docs/settings/README.md)

* [MirrorSettingsGet](docs/settings/README.md#mirrorsettingsget) - Gets a single setting by ID.

### [Subscriptions](docs/subscriptions/README.md)

* [MirrorSubscriptionsDelete](docs/subscriptions/README.md#mirrorsubscriptionsdelete) - Deletes a subscription.
* [MirrorSubscriptionsInsert](docs/subscriptions/README.md#mirrorsubscriptionsinsert) - Creates a new subscription.
* [MirrorSubscriptionsList](docs/subscriptions/README.md#mirrorsubscriptionslist) - Retrieves a list of subscriptions for the authenticated user and service.
* [MirrorSubscriptionsUpdate](docs/subscriptions/README.md#mirrorsubscriptionsupdate) - Updates an existing subscription in place.

### [Timeline](docs/timeline/README.md)

* [MirrorTimelineAttachmentsDelete](docs/timeline/README.md#mirrortimelineattachmentsdelete) - Deletes an attachment from a timeline item.
* [MirrorTimelineAttachmentsGet](docs/timeline/README.md#mirrortimelineattachmentsget) - Retrieves an attachment on a timeline item by item ID and attachment ID.
* [MirrorTimelineAttachmentsInsert](docs/timeline/README.md#mirrortimelineattachmentsinsert) - Adds a new attachment to a timeline item.
* [MirrorTimelineAttachmentsList](docs/timeline/README.md#mirrortimelineattachmentslist) - Returns a list of attachments for a timeline item.
* [MirrorTimelineDelete](docs/timeline/README.md#mirrortimelinedelete) - Deletes a timeline item.
* [MirrorTimelineGet](docs/timeline/README.md#mirrortimelineget) - Gets a single timeline item by ID.
* [MirrorTimelineInsert](docs/timeline/README.md#mirrortimelineinsert) - Inserts a new item into the timeline.
* [MirrorTimelineList](docs/timeline/README.md#mirrortimelinelist) - Retrieves a list of timeline items for the authenticated user.
* [MirrorTimelinePatch](docs/timeline/README.md#mirrortimelinepatch) - Updates a timeline item in place. This method supports patch semantics.
* [MirrorTimelineUpdate](docs/timeline/README.md#mirrortimelineupdate) - Updates a timeline item in place.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
