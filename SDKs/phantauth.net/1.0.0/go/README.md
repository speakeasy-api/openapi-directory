# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/phantauth.net/1.0.0/go
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
    res, err := s.Client.GetClientClientID(ctx, operations.GetClientClientIDRequest{
        ClientID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClientClientID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Client](docs/client/README.md)

* [GetClientClientID](docs/client/README.md#getclientclientid) - Get a Client
* [GetClientClientIDTokenKind](docs/client/README.md#getclientclientidtokenkind) - Get a Client Token
* [PostClient](docs/client/README.md#postclient) - Create a Client Selfie

### [Domain](docs/domain/README.md)

* [GetDomainDomainname](docs/domain/README.md#getdomaindomainname) - Get a Domain

### [Fleet](docs/fleet/README.md)

* [GetFleetFleetname](docs/fleet/README.md#getfleetfleetname) - Get a Fleet

### [Team](docs/team/README.md)

* [GetTeamTeamname](docs/team/README.md#getteamteamname) - Get a Team

### [Tenant](docs/tenant/README.md)

* [GetTenantTenantname](docs/tenant/README.md#gettenanttenantname) - Get a Tenant

### [User](docs/user/README.md)

* [GetUserUsername](docs/user/README.md#getuserusername) - Get a User
* [GetUserUsernameTokenKind](docs/user/README.md#getuserusernametokenkind) - Get a User Token
* [PostUser](docs/user/README.md#postuser) - Create a User Selfie
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
