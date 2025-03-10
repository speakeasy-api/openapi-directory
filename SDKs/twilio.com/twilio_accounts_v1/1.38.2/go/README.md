# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateCredentialAwsRequest{
        Security: operations.CreateCredentialAwsSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateCredentialAwsCreateCredentialAwsRequest{
            AccountSid: "sit",
            Credentials: "voluptas",
            FriendlyName: "culpa",
        },
    }
    
    res, err := s.CreateCredentialAws(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountsV1CredentialCredentialAws != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
