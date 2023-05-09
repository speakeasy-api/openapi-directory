# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/journy.io/1.0.0/go
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
    res, err := s.Accounts.AddUserToAccount(ctx, operations.AddUserToAccountRequestBody{
        Account: operations.AddUserToAccountRequestBodyAccount{
            AccountID: sdk.String("corrupti"),
            Domain: sdk.String("provident"),
        },
        Users: []AddUserToAccountRequestBodyUsers{
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Leda_Stiedemann@hotmail.com"),
                    UserID: sdk.String("vel"),
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Luna.Hoppe@yahoo.com"),
                    UserID: sdk.String("debitis"),
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Vincenzo.Goldner@gmail.com"),
                    UserID: sdk.String("minus"),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserToAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [AddUserToAccount](docs/accounts/README.md#addusertoaccount) - Add users to an account
* [DeleteAccount](docs/accounts/README.md#deleteaccount) - Delete account
* [RemoveUserFromAccount](docs/accounts/README.md#removeuserfromaccount) - Remove user from account
* [UpsertAccount](docs/accounts/README.md#upsertaccount) - Create or update account

### [Events](docs/events/README.md)

* [GetEvents](docs/events/README.md#getevents) - Get events
* [~~TrackJourneyEvent~~](docs/events/README.md#trackjourneyevent) - Track event :warning: **Deprecated**

### [Properties](docs/properties/README.md)

* [GetAccountProperties](docs/properties/README.md#getaccountproperties) - Get account properties
* [GetUserProperties](docs/properties/README.md#getuserproperties) - Get user properties

### [Segments](docs/segments/README.md)

* [GetAccountSegments](docs/segments/README.md#getaccountsegments) - Get account segments
* [GetUserSegments](docs/segments/README.md#getusersegments) - Get user segments

### [Track](docs/track/README.md)

* [TrackEvent](docs/track/README.md#trackevent) - Track event

### [Users](docs/users/README.md)

* [DeleteUser](docs/users/README.md#deleteuser) - Delete user
* [Link](docs/users/README.md#link) - Link web activity to user
* [UpsertUser](docs/users/README.md#upsertuser) - Create or update user

### [Validation](docs/validation/README.md)

* [GetValidity](docs/validation/README.md#getvalidity) - Validate API key

### [Websites](docs/websites/README.md)

* [GetTrackingSnippet](docs/websites/README.md#gettrackingsnippet) - Get snippet for a website
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
