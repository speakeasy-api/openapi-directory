# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/policytroubleshooter/v1beta/go
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

    req := operations.PolicytroubleshooterIamTroubleshootRequest{
        DollarXgafv: "2",
        GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest: &shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyRequest{
            AccessTuple: &shared.GoogleCloudPolicytroubleshooterV1betaAccessTuple{
                FullResourceName: "provident",
                Permission: "distinctio",
                Principal: "quibusdam",
            },
        },
        AccessToken: "unde",
        Alt: "proto",
        Callback: "corrupti",
        Fields: "illum",
        Key: "vel",
        OauthToken: "error",
        PrettyPrint: false,
        QuotaUser: "deserunt",
        UploadType: "suscipit",
        UploadProtocol: "iure",
    }

    ctx := context.Background()
    res, err := s.Iam.PolicytroubleshooterIamTroubleshoot(ctx, req, operations.PolicytroubleshooterIamTroubleshootSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Iam

* `PolicytroubleshooterIamTroubleshoot` - Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
