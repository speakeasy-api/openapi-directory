# LanguageDatasets

## Overview

Resources that manage text datasets.

### Available Operations

* [DeleteDataset](#deletedataset) - Delete a Dataset
* [Get](#get) - Get Deletion Status
* [GetDataset](#getdataset) - Get a Dataset
* [ListDatasets](#listdatasets) - Get All Datasets
* [UploadDatasetAsync](#uploaddatasetasync) - Create a Dataset From a File Asynchronously
* [UploadDatasetSync](#uploaddatasetsync) - Create a Dataset From a File Synchronously

## DeleteDataset

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
    res, err := s.LanguageDatasets.DeleteDataset(ctx, operations.DeleteDatasetRequest{
        DatasetID: "provident",
    }, operations.DeleteDatasetSecurity{
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

## Get

Returns the status of a language dataset or model deletion. When you delete a dataset or model, the deletion may not occur immediately. Use this call to find out when the deletion is complete.

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
    res, err := s.LanguageDatasets.Get(ctx, operations.GetRequest{
        ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
    }, operations.GetSecurity{
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

## GetDataset

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
    res, err := s.LanguageDatasets.GetDataset(ctx, operations.GetDatasetRequest{
        DatasetID: "ipsam",
    }, operations.GetDatasetSecurity{
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

## ListDatasets

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
    res, err := s.LanguageDatasets.ListDatasets(ctx, operations.ListDatasetsRequest{
        Count: sdk.String("repellendus"),
        Global: sdk.Bool(false),
        Offset: sdk.String("sapiente"),
    }, operations.ListDatasetsSecurity{
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

## UploadDatasetAsync

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns immediately and continues to upload data in the background.

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
    res, err := s.LanguageDatasets.UploadDatasetAsync(ctx, operations.UploadDatasetAsyncRequestBody{
        Data: sdk.String("quo"),
        Name: sdk.String("weather"),
        Path: sdk.String("odit"),
        Type: operations.UploadDatasetAsyncRequestBodyTypeEnumTextSentiment.ToPointer(),
    }, operations.UploadDatasetAsyncSecurity{
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

## UploadDatasetSync

Creates a dataset, labels, and examples from the specified .csv, .tsv, or .json file. The call returns after the dataset is created and all of the data is uploaded.

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
    res, err := s.LanguageDatasets.UploadDatasetSync(ctx, operations.UploadDatasetSyncRequestBody{
        Data: sdk.String("at"),
        Name: sdk.String("weather"),
        Path: sdk.String("maiores"),
        Type: operations.UploadDatasetSyncRequestBodyTypeEnumTextIntent.ToPointer(),
    }, operations.UploadDatasetSyncSecurity{
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
