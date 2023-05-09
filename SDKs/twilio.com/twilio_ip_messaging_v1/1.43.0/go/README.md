# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_ip_messaging_v1/1.43.0/go
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
    res, err := s.CreateChannel(ctx, operations.CreateChannelRequest{
        RequestBody: &operations.CreateChannelCreateChannelRequest{
            Attributes: sdk.String("corrupti"),
            FriendlyName: sdk.String("provident"),
            Type: shared.ChannelEnumChannelTypeEnumPrivate.ToPointer(),
            UniqueName: sdk.String("quibusdam"),
        },
        ServiceSid: "unde",
    }, operations.CreateChannelSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV1ServiceChannel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateChannel](docs/sdk/README.md#createchannel)
* [CreateCredential](docs/sdk/README.md#createcredential)
* [CreateInvite](docs/sdk/README.md#createinvite)
* [CreateMember](docs/sdk/README.md#createmember)
* [CreateMessage](docs/sdk/README.md#createmessage)
* [CreateRole](docs/sdk/README.md#createrole)
* [CreateService](docs/sdk/README.md#createservice)
* [CreateUser](docs/sdk/README.md#createuser)
* [DeleteChannel](docs/sdk/README.md#deletechannel)
* [DeleteCredential](docs/sdk/README.md#deletecredential)
* [DeleteInvite](docs/sdk/README.md#deleteinvite)
* [DeleteMember](docs/sdk/README.md#deletemember)
* [DeleteMessage](docs/sdk/README.md#deletemessage)
* [DeleteRole](docs/sdk/README.md#deleterole)
* [DeleteService](docs/sdk/README.md#deleteservice)
* [DeleteUser](docs/sdk/README.md#deleteuser)
* [FetchChannel](docs/sdk/README.md#fetchchannel)
* [FetchCredential](docs/sdk/README.md#fetchcredential)
* [FetchInvite](docs/sdk/README.md#fetchinvite)
* [FetchMember](docs/sdk/README.md#fetchmember)
* [FetchMessage](docs/sdk/README.md#fetchmessage)
* [FetchRole](docs/sdk/README.md#fetchrole)
* [FetchService](docs/sdk/README.md#fetchservice)
* [FetchUser](docs/sdk/README.md#fetchuser)
* [ListChannel](docs/sdk/README.md#listchannel)
* [ListCredential](docs/sdk/README.md#listcredential)
* [ListInvite](docs/sdk/README.md#listinvite)
* [ListMember](docs/sdk/README.md#listmember)
* [ListMessage](docs/sdk/README.md#listmessage)
* [ListRole](docs/sdk/README.md#listrole)
* [ListService](docs/sdk/README.md#listservice)
* [ListUser](docs/sdk/README.md#listuser)
* [ListUserChannel](docs/sdk/README.md#listuserchannel)
* [UpdateChannel](docs/sdk/README.md#updatechannel)
* [UpdateCredential](docs/sdk/README.md#updatecredential)
* [UpdateMember](docs/sdk/README.md#updatemember)
* [UpdateMessage](docs/sdk/README.md#updatemessage)
* [UpdateRole](docs/sdk/README.md#updaterole)
* [UpdateService](docs/sdk/README.md#updateservice)
* [UpdateUser](docs/sdk/README.md#updateuser)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
