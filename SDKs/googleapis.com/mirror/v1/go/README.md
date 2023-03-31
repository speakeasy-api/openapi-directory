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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.MirrorAccountsInsertRequest{
        Account: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: "provident",
                    Type: "distinctio",
                },
                shared.AuthToken{
                    AuthToken: "quibusdam",
                    Type: "unde",
                },
                shared.AuthToken{
                    AuthToken: "nulla",
                    Type: "corrupti",
                },
            },
            Features: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Password: "iure",
            UserData: []shared.UserData{
                shared.UserData{
                    Key: "debitis",
                    Value: "ipsa",
                },
                shared.UserData{
                    Key: "delectus",
                    Value: "tempora",
                },
            },
        },
        AccountName: "suscipit",
        AccountType: "molestiae",
        Alt: "json",
        Fields: "minus",
        Key: "placeat",
        OauthToken: "voluptatum",
        PrettyPrint: false,
        QuotaUser: "iusto",
        UserIP: "excepturi",
        UserToken: "nisi",
    }

    ctx := context.Background()
    res, err := s.Accounts.MirrorAccountsInsert(ctx, req)
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


### Accounts

* `MirrorAccountsInsert` - Inserts a new account for a user

### Contacts

* `MirrorContactsDelete` - Deletes a contact.
* `MirrorContactsGet` - Gets a single contact by ID.
* `MirrorContactsInsert` - Inserts a new contact.
* `MirrorContactsList` - Retrieves a list of contacts for the authenticated user.
* `MirrorContactsPatch` - Updates a contact in place. This method supports patch semantics.
* `MirrorContactsUpdate` - Updates a contact in place.

### Locations

* `MirrorLocationsGet` - Gets a single location by ID.
* `MirrorLocationsList` - Retrieves a list of locations for the user.

### Settings

* `MirrorSettingsGet` - Gets a single setting by ID.

### Subscriptions

* `MirrorSubscriptionsDelete` - Deletes a subscription.
* `MirrorSubscriptionsInsert` - Creates a new subscription.
* `MirrorSubscriptionsList` - Retrieves a list of subscriptions for the authenticated user and service.
* `MirrorSubscriptionsUpdate` - Updates an existing subscription in place.

### Timeline

* `MirrorTimelineAttachmentsDelete` - Deletes an attachment from a timeline item.
* `MirrorTimelineAttachmentsGet` - Retrieves an attachment on a timeline item by item ID and attachment ID.
* `MirrorTimelineAttachmentsInsert` - Adds a new attachment to a timeline item.
* `MirrorTimelineAttachmentsList` - Returns a list of attachments for a timeline item.
* `MirrorTimelineDelete` - Deletes a timeline item.
* `MirrorTimelineGet` - Gets a single timeline item by ID.
* `MirrorTimelineInsert` - Inserts a new item into the timeline.
* `MirrorTimelineList` - Retrieves a list of timeline items for the authenticated user.
* `MirrorTimelinePatch` - Updates a timeline item in place. This method supports patch semantics.
* `MirrorTimelineUpdate` - Updates a timeline item in place.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
