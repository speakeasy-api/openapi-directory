# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_sync_v1/1.43.0/go
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
    res, err := s.CreateDocument(ctx, operations.CreateDocumentRequest{
        RequestBody: &operations.CreateDocumentCreateDocumentRequest{
            Data: sdk.String("corrupti"),
            TTL: sdk.Int64(592845),
            UniqueName: sdk.String("distinctio"),
        },
        ServiceSid: "quibusdam",
    }, operations.CreateDocumentSecurity{
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

### [SDK](docs/sdk/README.md)

* [CreateDocument](docs/sdk/README.md#createdocument)
* [CreateService](docs/sdk/README.md#createservice)
* [CreateStreamMessage](docs/sdk/README.md#createstreammessage) - Create a new Stream Message.
* [CreateSyncList](docs/sdk/README.md#createsynclist)
* [CreateSyncListItem](docs/sdk/README.md#createsynclistitem)
* [CreateSyncMap](docs/sdk/README.md#createsyncmap)
* [CreateSyncMapItem](docs/sdk/README.md#createsyncmapitem)
* [CreateSyncStream](docs/sdk/README.md#createsyncstream) - Create a new Stream.
* [DeleteDocument](docs/sdk/README.md#deletedocument)
* [DeleteDocumentPermission](docs/sdk/README.md#deletedocumentpermission) - Delete a specific Sync Document Permission.
* [DeleteService](docs/sdk/README.md#deleteservice)
* [DeleteSyncList](docs/sdk/README.md#deletesynclist)
* [DeleteSyncListItem](docs/sdk/README.md#deletesynclistitem)
* [DeleteSyncListPermission](docs/sdk/README.md#deletesynclistpermission) - Delete a specific Sync List Permission.
* [DeleteSyncMap](docs/sdk/README.md#deletesyncmap)
* [DeleteSyncMapItem](docs/sdk/README.md#deletesyncmapitem)
* [DeleteSyncMapPermission](docs/sdk/README.md#deletesyncmappermission) - Delete a specific Sync Map Permission.
* [DeleteSyncStream](docs/sdk/README.md#deletesyncstream) - Delete a specific Stream.
* [FetchDocument](docs/sdk/README.md#fetchdocument)
* [FetchDocumentPermission](docs/sdk/README.md#fetchdocumentpermission) - Fetch a specific Sync Document Permission.
* [FetchService](docs/sdk/README.md#fetchservice)
* [FetchSyncList](docs/sdk/README.md#fetchsynclist)
* [FetchSyncListItem](docs/sdk/README.md#fetchsynclistitem)
* [FetchSyncListPermission](docs/sdk/README.md#fetchsynclistpermission) - Fetch a specific Sync List Permission.
* [FetchSyncMap](docs/sdk/README.md#fetchsyncmap)
* [FetchSyncMapItem](docs/sdk/README.md#fetchsyncmapitem)
* [FetchSyncMapPermission](docs/sdk/README.md#fetchsyncmappermission) - Fetch a specific Sync Map Permission.
* [FetchSyncStream](docs/sdk/README.md#fetchsyncstream) - Fetch a specific Stream.
* [ListDocument](docs/sdk/README.md#listdocument)
* [ListDocumentPermission](docs/sdk/README.md#listdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [ListService](docs/sdk/README.md#listservice)
* [ListSyncList](docs/sdk/README.md#listsynclist)
* [ListSyncListItem](docs/sdk/README.md#listsynclistitem)
* [ListSyncListPermission](docs/sdk/README.md#listsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [ListSyncMap](docs/sdk/README.md#listsyncmap)
* [ListSyncMapItem](docs/sdk/README.md#listsyncmapitem)
* [ListSyncMapPermission](docs/sdk/README.md#listsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [ListSyncStream](docs/sdk/README.md#listsyncstream) - Retrieve a list of all Streams in a Service Instance.
* [UpdateDocument](docs/sdk/README.md#updatedocument)
* [UpdateDocumentPermission](docs/sdk/README.md#updatedocumentpermission) - Update an identity's access to a specific Sync Document.
* [UpdateService](docs/sdk/README.md#updateservice)
* [UpdateSyncList](docs/sdk/README.md#updatesynclist)
* [UpdateSyncListItem](docs/sdk/README.md#updatesynclistitem)
* [UpdateSyncListPermission](docs/sdk/README.md#updatesynclistpermission) - Update an identity's access to a specific Sync List.
* [UpdateSyncMap](docs/sdk/README.md#updatesyncmap)
* [UpdateSyncMapItem](docs/sdk/README.md#updatesyncmapitem)
* [UpdateSyncMapPermission](docs/sdk/README.md#updatesyncmappermission) - Update an identity's access to a specific Sync Map.
* [UpdateSyncStream](docs/sdk/README.md#updatesyncstream) - Update a specific Stream.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
