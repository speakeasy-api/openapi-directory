# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_chat_v2/1.40.0/go
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

    req := operations.CreateChannelRequest{
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: "corrupti",
            CreatedBy: "provident",
            DateCreated: "2021-04-24T16:27:50.833Z",
            DateUpdated: "2021-04-14T16:47:33.722Z",
            FriendlyName: "corrupti",
            Type: "private",
            UniqueName: "vel",
        },
        ServiceSid: "error",
        XTwilioWebhookEnabled: "false",
    }

    ctx := context.Background()
    res, err := s.CreateChannel(ctx, req, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateChannel`
* `CreateChannelWebhook`
* `CreateCredential`
* `CreateInvite`
* `CreateMember`
* `CreateMessage`
* `CreateRole`
* `CreateService`
* `CreateUser`
* `DeleteBinding`
* `DeleteChannel`
* `DeleteChannelWebhook`
* `DeleteCredential`
* `DeleteInvite`
* `DeleteMember`
* `DeleteMessage`
* `DeleteRole`
* `DeleteService`
* `DeleteUser`
* `DeleteUserBinding`
* `DeleteUserChannel` - Removes User from selected Channel.
* `FetchBinding`
* `FetchChannel`
* `FetchChannelWebhook`
* `FetchCredential`
* `FetchInvite`
* `FetchMember`
* `FetchMessage`
* `FetchRole`
* `FetchService`
* `FetchUser`
* `FetchUserBinding`
* `FetchUserChannel`
* `ListBinding`
* `ListChannel`
* `ListChannelWebhook`
* `ListCredential`
* `ListInvite`
* `ListMember`
* `ListMessage`
* `ListRole`
* `ListService`
* `ListUser`
* `ListUserBinding`
* `ListUserChannel` - List all Channels for a given User.
* `UpdateChannel`
* `UpdateChannelWebhook`
* `UpdateCredential`
* `UpdateMember`
* `UpdateMessage`
* `UpdateRole`
* `UpdateService`
* `UpdateUser`
* `UpdateUserChannel`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
