# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/cloudprofiler/v2/go
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

    req := operations.CloudprofilerProjectsProfilesCreateRequest{
        DollarXgafv: "2",
        CreateProfileRequest: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                ProjectID: "vel",
                Target: "error",
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                "HEAP",
                "HEAP",
                "WALL",
            },
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        Fields: "tempora",
        Key: "suscipit",
        OauthToken: "molestiae",
        Parent: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudprofilerProjectsProfilesCreate(ctx, req, operations.CloudprofilerProjectsProfilesCreateSecurity{
        Option1: &operations.CloudprofilerProjectsProfilesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `CloudprofilerProjectsProfilesCreate` - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 
* `CloudprofilerProjectsProfilesCreateOffline` - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
* `CloudprofilerProjectsProfilesPatch` - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
