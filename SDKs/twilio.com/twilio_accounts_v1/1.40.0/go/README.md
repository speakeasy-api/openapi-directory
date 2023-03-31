# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_accounts_v1/1.40.0/go
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

    req := operations.CreateCredentialAwsCreateCredentialAwsRequest{
        AccountSid: "corrupti",
        Credentials: "provident",
        FriendlyName: "distinctio",
    }

    ctx := context.Background()
    res, err := s.CreateCredentialAws(ctx, req, operations.CreateCredentialAwsSecurity{
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

### SDK SDK

* `CreateCredentialAws` - Create a new AWS Credential
* `CreateCredentialPublicKey` - Create a new Public Key Credential
* `CreateSecondaryAuthToken` - Create a new secondary Auth Token
* `DeleteCredentialAws` - Delete a Credential from your account
* `DeleteCredentialPublicKey` - Delete a Credential from your account
* `DeleteSecondaryAuthToken` - Delete the secondary Auth Token from your account
* `FetchCredentialAws` - Fetch the AWS credentials specified by the provided Credential Sid
* `FetchCredentialPublicKey` - Fetch the public key specified by the provided Credential Sid
* `ListCredentialAws` - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* `ListCredentialPublicKey` - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* `UpdateAuthTokenPromotion` - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* `UpdateCredentialAws` - Modify the properties of a given Account
* `UpdateCredentialPublicKey` - Modify the properties of a given Account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
