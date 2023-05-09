# Blobs

## Overview

The `blobs` resource provides a service for storing binary objects on the Brain, e.g. images.
Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.

See also the `kvpairs` resource.


### Available Operations

* [AddBlob](#addblob) - Create binary large object (blob) metadata
* [DeleteBlob](#deleteblob) - Delete binary large object (blob)
* [GetBlobByID](#getblobbyid) - Download a binary large object (blob)
* [GetBlobMetadataByID](#getblobmetadatabyid) - Get binary large object (blob)
* [GetBlobs](#getblobs) - Get all binary large objects (blob)
* [UploadBlobByID](#uploadblobbyid) - Create binary large object (blob)

## AddBlob

Create binary large object (blob) metadata

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Blobs.AddBlob(ctx, shared.BlobInput{
        BlobKey: sdk.String("foobar"),
        ContentType: sdk.String("image/png"),
        Filename: sdk.String("Foo bar"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteBlob

Delete binary large object (blob)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Blobs.DeleteBlob(ctx, operations.DeleteBlobRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetBlobByID

Download a binary large object (blob)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Blobs.GetBlobByID(ctx, operations.GetBlobByIDRequest{
        Filename: "deserunt",
        ID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlobByID200ImageWildcardBinaryString != nil {
        // handle response
    }
}
```

## GetBlobMetadataByID

Get binary large object (blob)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Blobs.GetBlobMetadataByID(ctx, operations.GetBlobMetadataByIDRequest{
        ID: "b7392059-2939-46fe-a759-6eb10faaa235",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Blob != nil {
        // handle response
    }
}
```

## GetBlobs

Get all binary large objects (blob)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Blobs.GetBlobs(ctx, operations.GetBlobsRequest{
        After: types.MustTimeFromString("2022-04-01T23:59:21.675Z"),
        AfterID: sdk.String("enim"),
        Before: sdk.String("omnis"),
        BeforeID: sdk.String("nemo"),
        BlobKey: sdk.String("minima"),
        ContentType: sdk.String("excepturi"),
        Filename: sdk.String("accusantium"),
        From: sdk.String("iure"),
        FromID: sdk.String("culpa"),
        Hash: sdk.String("doloribus"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Limit: sdk.Int64(958950),
        Populate: sdk.String("architecto"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("mollitia"),
        Sort: sdk.String("dolorem"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeLastAccessed: sdk.String("culpa"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(1613.09),
        Until: sdk.String("repellat"),
        UntilID: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBlobs200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UploadBlobByID

Create binary large object (blob)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Blobs.UploadBlobByID(ctx, operations.UploadBlobByIDRequest{
        RequestBody: &operations.UploadBlobByIDRequestBody{
            File: &operations.UploadBlobByIDRequestBodyFile{
                Content: []byte("occaecati"),
                File: "numquam",
            },
        },
        ID: "67739251-aa52-4c3f-9ad0-19da1ffe78f0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
