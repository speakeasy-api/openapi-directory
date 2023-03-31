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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.AddUserToAccountRequestBody{
        Account: operations.AddUserToAccountRequestBodyAccount{
            AccountID: "corrupti",
            Domain: "provident",
        },
        Users: []AddUserToAccountRequestBodyUsers{
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: "Leda_Stiedemann@hotmail.com",
                    UserID: "vel",
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: "Luna.Hoppe@yahoo.com",
                    UserID: "debitis",
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: "Vincenzo.Goldner@gmail.com",
                    UserID: "minus",
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AddUserToAccount(ctx, req)
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


### Accounts

* `AddUserToAccount` - Add users to an account
* `DeleteAccount` - Delete account
* `RemoveUserFromAccount` - Remove user from account
* `UpsertAccount` - Create or update account

### Events

* `GetEvents` - Get events
* `TrackJourneyEvent` - Track event

### Properties

* `GetAccountProperties` - Get account properties
* `GetUserProperties` - Get user properties

### Segments

* `GetAccountSegments` - Get account segments
* `GetUserSegments` - Get user segments

### Track

* `TrackEvent` - Track event

### Users

* `DeleteUser` - Delete user
* `Link` - Link web activity to user
* `UpsertUser` - Create or update user

### Validation

* `GetValidity` - Validate API key

### Websites

* `GetTrackingSnippet` - Get snippet for a website
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
