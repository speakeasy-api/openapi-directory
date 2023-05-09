# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/mozilla.com/kinto/1.22/go
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
    res, err := s.Attachment.CreateAttachment(ctx, operations.CreateAttachmentRequest{
        BucketID: "corrupti",
        CollectionID: "provident",
        ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Attachment](docs/attachment/README.md)

* [CreateAttachment](docs/attachment/README.md#createattachment)
* [DeleteAttachment](docs/attachment/README.md#deleteattachment)

### [Batch](docs/batch/README.md)

* [Batch](docs/batch/README.md#batch)

### [Buckets](docs/buckets/README.md)

* [GetBucket](docs/buckets/README.md#getbucket)
* [GetBuckets](docs/buckets/README.md#getbuckets)

### [Changess](docs/changess/README.md)

* [GetChangess](docs/changess/README.md#getchangess)

### [CollectionChangeset](docs/collectionchangeset/README.md)

* [GetCollectionChangeset](docs/collectionchangeset/README.md#getcollectionchangeset)

### [Collections](docs/collections/README.md)

* [GetCollection](docs/collections/README.md#getcollection)
* [GetCollections](docs/collections/README.md#getcollections)

### [Groups](docs/groups/README.md)

* [GetGroup](docs/groups/README.md#getgroup)
* [GetGroups](docs/groups/README.md#getgroups)

### [Records](docs/records/README.md)

* [GetRecord](docs/records/README.md#getrecord)
* [GetRecords](docs/records/README.md#getrecords)

### [Utilities](docs/utilities/README.md)

* [Heartbeat](docs/utilities/README.md#heartbeat)
* [Lbheartbeat](docs/utilities/README.md#lbheartbeat)
* [Version](docs/utilities/README.md#version)
* [Contribute](docs/utilities/README.md#contribute)
* [GetOpenapiSpec](docs/utilities/README.md#getopenapispec)
* [ServerInfo](docs/utilities/README.md#serverinfo)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
