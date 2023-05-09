# VisionDatasets

## Overview

Resources that manage image datasets.

### Available Operations

* [CreateDataset](#createdataset) - Create a Dataset
* [DeleteDataset1](#deletedataset1) - Delete a Dataset
* [GetDataset1](#getdataset1) - Get a Dataset
* [Get1](#get1) - Get Deletion Status
* [ListDatasets1](#listdatasets1) - Get All Datasets
* [UploadDatasetAsync1](#uploaddatasetasync1) - Create a Dataset From a Zip File Asynchronously
* [UploadDatasetSync1](#uploaddatasetsync1) - Create a Dataset From a Zip File Synchronously

## CreateDataset

Creates a dataset and labels, if they're specified.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionDatasets.CreateDataset(ctx, operations.CreateDatasetRequestBody{
        Labels: sdk.String("beach,mountain"),
        Name: sdk.String("Beach and Mountain"),
        Type: operations.CreateDatasetRequestBodyTypeEnumImageMultiLabel.ToPointer(),
    }, operations.CreateDatasetSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```

## DeleteDataset1

Deletes the specified dataset and associated labels and examples.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionDatasets.DeleteDataset1(ctx, operations.DeleteDataset1Request{
        DatasetID: "laboriosam",
    }, operations.DeleteDataset1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletionResponse != nil {
        // handle response
    }
}
```

## GetDataset1

Returns a single dataset.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionDatasets.GetDataset1(ctx, operations.GetDataset1Request{
        DatasetID: "hic",
    }, operations.GetDataset1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```

## Get1

Returns the status of an image dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionDatasets.Get1(ctx, operations.Get1Request{
        ID: "ea7596eb-10fa-4aa2-b52c-5955907aff1a",
    }, operations.Get1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletionResponse != nil {
        // handle response
    }
}
```

## ListDatasets1

Returns a list of datasets and their labels that were created by the current user. The response is sorted by dataset ID.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionDatasets.ListDatasets1(ctx, operations.ListDatasets1Request{
        Count: sdk.String("dolorem"),
        Global: sdk.Bool(false),
        Offset: sdk.String("culpa"),
    }, operations.ListDatasets1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DatasetList != nil {
        // handle response
    }
}
```

## UploadDatasetAsync1

Creates a dataset, labels, and examples from the specified .zip file. The call returns immediately and continues to upload the images in the background.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionDatasets.UploadDatasetAsync1(ctx, operations.UploadDatasetAsync1RequestBody{
        Data: sdk.String("consequuntur"),
        Name: sdk.String("mountainvsbeach"),
        Path: sdk.String("repellat"),
        Type: operations.UploadDatasetAsync1RequestBodyTypeEnumImageDetection.ToPointer(),
    }, operations.UploadDatasetAsync1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```

## UploadDatasetSync1

Creates a dataset, labels, and examples from the specified .zip file. The call returns after the dataset is created and all of the images are uploaded.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionDatasets.UploadDatasetSync1(ctx, operations.UploadDatasetSync1RequestBody{
        Data: sdk.String("occaecati"),
        Name: sdk.String("mountainvsbeach"),
        Path: sdk.String("numquam"),
        Type: operations.UploadDatasetSync1RequestBodyTypeEnumImageDetection.ToPointer(),
    }, operations.UploadDatasetSync1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```
