# Images

## Overview

Images are blueprints for your VM disks. They can be of different types:

### System Images
Distribution Images maintained by us, e.g. “Ubuntu 20.04”

### Snapshot Images
Maintained by you, for example “Ubuntu 20.04 with my own settings”. These are billed per GB per month.

### Backup Images
Daily Backups of your Server. Will automatically be created for Servers which have backups enabled (`POST /servers/{id}/actions/enable_backup`)

Bound to exactly one Server. If you delete the Server, you also delete all backups bound to it. You may convert backup Images to snapshot Images to keep them.

These are billed at 20% of your instance price for 7 backup slots.

### App Images
Prebuild images with specific software configurations, e.g. “Wordpress”. All app images are created by us.


### Available Operations

* [DeleteImagesID](#deleteimagesid) - Delete an Image
* [GetImages](#getimages) - Get all Images
* [GetImagesID](#getimagesid) - Get an Image
* [PutImagesID](#putimagesid) - Update an Image

## DeleteImagesID

Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.

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
    res, err := s.Images.DeleteImagesID(ctx, operations.DeleteImagesIDRequest{
        ID: 565189,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetImages

Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.

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
    res, err := s.Images.GetImages(ctx, operations.GetImagesRequest{
        Architecture: sdk.String("excepturi"),
        BoundTo: sdk.String("pariatur"),
        IncludeDeprecated: sdk.Bool(false),
        LabelSelector: sdk.String("modi"),
        Name: sdk.String("Dr. Jordan Von"),
        Sort: operations.GetImagesSortEnumID.ToPointer(),
        Status: operations.GetImagesStatusEnumCreating.ToPointer(),
        Type: operations.GetImagesTypeEnumSnapshot.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetImagesID

Returns a specific Image object.

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
    res, err := s.Images.GetImagesID(ctx, operations.GetImagesIDRequest{
        ID: 318569,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetImagesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutImagesID

Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.

Note that when updating labels, the current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


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
    res, err := s.Images.PutImagesID(ctx, operations.PutImagesIDRequest{
        RequestBody: &operations.PutImagesIDUpdateImageRequest{
            Description: sdk.String("My new Image description"),
            Labels: map[string]interface{}{
                "est": "quibusdam",
            },
            Type: operations.PutImagesIDUpdateImageRequestTypeEnumSnapshot.ToPointer(),
        },
        ID: 131797,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutImagesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
