# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/firebasestorage/v1beta/go
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

    req := operations.FirebasestorageProjectsBucketsAddFirebaseRequest{
        DollarXgafv: "2",
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        AccessToken: "vel",
        Alt: "media",
        Bucket: "deserunt",
        Callback: "suscipit",
        Fields: "iure",
        Key: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.FirebasestorageProjectsBucketsAddFirebase(ctx, req, operations.FirebasestorageProjectsBucketsAddFirebaseSecurity{
        Option1: &operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Projects

* `FirebasestorageProjectsBucketsAddFirebase` - Links a Google Cloud Storage bucket to a Firebase project.
* `FirebasestorageProjectsBucketsGet` - Gets a single linked storage bucket.
* `FirebasestorageProjectsBucketsList` - Lists the linked storage buckets for a project.
* `FirebasestorageProjectsBucketsRemoveFirebase` - Unlinks a linked Google Cloud Storage bucket from a Firebase project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
