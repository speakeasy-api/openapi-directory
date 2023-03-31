# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_sync_v1/1.40.0/go
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

    req := operations.CreateDocumentRequest{
        RequestBody: &operations.CreateDocumentCreateDocumentRequest{
            Data: "corrupti",
            TTL: 592845,
            UniqueName: "distinctio",
        },
        ServiceSid: "quibusdam",
    }

    ctx := context.Background()
    res, err := s.CreateDocument(ctx, req, operations.CreateDocumentSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SyncV1ServiceDocument != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateDocument`
* `CreateService`
* `CreateStreamMessage` - Create a new Stream Message.
* `CreateSyncList`
* `CreateSyncListItem`
* `CreateSyncMap`
* `CreateSyncMapItem`
* `CreateSyncStream` - Create a new Stream.
* `DeleteDocument`
* `DeleteDocumentPermission` - Delete a specific Sync Document Permission.
* `DeleteService`
* `DeleteSyncList`
* `DeleteSyncListItem`
* `DeleteSyncListPermission` - Delete a specific Sync List Permission.
* `DeleteSyncMap`
* `DeleteSyncMapItem`
* `DeleteSyncMapPermission` - Delete a specific Sync Map Permission.
* `DeleteSyncStream` - Delete a specific Stream.
* `FetchDocument`
* `FetchDocumentPermission` - Fetch a specific Sync Document Permission.
* `FetchService`
* `FetchSyncList`
* `FetchSyncListItem`
* `FetchSyncListPermission` - Fetch a specific Sync List Permission.
* `FetchSyncMap`
* `FetchSyncMapItem`
* `FetchSyncMapPermission` - Fetch a specific Sync Map Permission.
* `FetchSyncStream` - Fetch a specific Stream.
* `ListDocument`
* `ListDocumentPermission` - Retrieve a list of all Permissions applying to a Sync Document.
* `ListService`
* `ListSyncList`
* `ListSyncListItem`
* `ListSyncListPermission` - Retrieve a list of all Permissions applying to a Sync List.
* `ListSyncMap`
* `ListSyncMapItem`
* `ListSyncMapPermission` - Retrieve a list of all Permissions applying to a Sync Map.
* `ListSyncStream` - Retrieve a list of all Streams in a Service Instance.
* `UpdateDocument`
* `UpdateDocumentPermission` - Update an identity's access to a specific Sync Document.
* `UpdateService`
* `UpdateSyncList`
* `UpdateSyncListItem`
* `UpdateSyncListPermission` - Update an identity's access to a specific Sync List.
* `UpdateSyncMap`
* `UpdateSyncMapItem`
* `UpdateSyncMapPermission` - Update an identity's access to a specific Sync Map.
* `UpdateSyncStream` - Update a specific Stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
