# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_accounts_v1/1.43.0/go
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
    res, err := s.CreateCredentialAws(ctx, operations.CreateCredentialAwsCreateCredentialAwsRequest{
        AccountSid: sdk.String("corrupti"),
        Credentials: "provident",
        FriendlyName: sdk.String("distinctio"),
    }, operations.CreateCredentialAwsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialAws != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateCredentialAws](docs/sdk/README.md#createcredentialaws) - Create a new AWS Credential
* [CreateCredentialPublicKey](docs/sdk/README.md#createcredentialpublickey) - Create a new Public Key Credential
* [CreateSecondaryAuthToken](docs/sdk/README.md#createsecondaryauthtoken) - Create a new secondary Auth Token
* [DeleteCredentialAws](docs/sdk/README.md#deletecredentialaws) - Delete a Credential from your account
* [DeleteCredentialPublicKey](docs/sdk/README.md#deletecredentialpublickey) - Delete a Credential from your account
* [DeleteSecondaryAuthToken](docs/sdk/README.md#deletesecondaryauthtoken) - Delete the secondary Auth Token from your account
* [FetchCredentialAws](docs/sdk/README.md#fetchcredentialaws) - Fetch the AWS credentials specified by the provided Credential Sid
* [FetchCredentialPublicKey](docs/sdk/README.md#fetchcredentialpublickey) - Fetch the public key specified by the provided Credential Sid
* [ListCredentialAws](docs/sdk/README.md#listcredentialaws) - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* [ListCredentialPublicKey](docs/sdk/README.md#listcredentialpublickey) - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* [UpdateAuthTokenPromotion](docs/sdk/README.md#updateauthtokenpromotion) - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* [UpdateCredentialAws](docs/sdk/README.md#updatecredentialaws) - Modify the properties of a given Account
* [UpdateCredentialPublicKey](docs/sdk/README.md#updatecredentialpublickey) - Modify the properties of a given Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
