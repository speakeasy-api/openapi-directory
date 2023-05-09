# Volumes

## Overview

A Volume is a highly-available, scalable, and SSD-based block storage for Servers.

Pricing for Volumes depends on the Volume size and Location, not the actual used storage.

Please see [Hetzner Docs](https://docs.hetzner.com/cloud/#Volumes) for more details about Volumes.


### Available Operations

* [DeleteVolumesID](#deletevolumesid) - Delete a Volume
* [GetVolumes](#getvolumes) - Get all Volumes
* [GetVolumesID](#getvolumesid) - Get a Volume
* [PostVolumes](#postvolumes) - Create a Volume
* [PutVolumesID](#putvolumesid) - Update a Volume

## DeleteVolumesID

Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.

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
    res, err := s.Volumes.DeleteVolumesID(ctx, operations.DeleteVolumesIDRequest{
        ID: "f7fbc7ab-d74d-4d39-80f5-d2cff7c70a45",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVolumes

Gets all existing Volumes that you have available.

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
    res, err := s.Volumes.GetVolumes(ctx, operations.GetVolumesRequest{
        LabelSelector: sdk.String("ea"),
        Name: sdk.String("Jessie Schuster"),
        Sort: operations.GetVolumesSortEnumName.ToPointer(),
        Status: operations.GetVolumesStatusEnumCreating.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVolumes200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetVolumesID

Gets a specific Volume object.

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
    res, err := s.Volumes.GetVolumesID(ctx, operations.GetVolumesIDRequest{
        ID: 120657,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetVolumesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostVolumes

Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.

Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.

The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).

A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.

#### Call specific error codes

| Code                                | Description                                         |
|-------------------------------------|-----------------------------------------------------|
| `no_space_left_in_location`         | There is no volume space left in the given location |


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
    res, err := s.Volumes.PostVolumes(ctx, operations.PostVolumesCreateVolumeRequest{
        Automount: sdk.Bool(false),
        Format: sdk.String("xfs"),
        Labels: map[string]interface{}{
            "maiores": "quasi",
        },
        Location: sdk.String("nbg1"),
        Name: "databases-storage",
        Server: sdk.Int64(406120),
        Size: 42,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostVolumes201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PutVolumesID

Updates the Volume properties.

Note that when updating labels, the volume’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.


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
    res, err := s.Volumes.PutVolumesID(ctx, operations.PutVolumesIDRequest{
        RequestBody: &operations.PutVolumesIDUpdateVolumeRequest{
            Labels: &operations.PutVolumesIDUpdateVolumeRequestLabels{
                Labelkey: sdk.String("value"),
            },
            Name: "database-storage",
        },
        ID: "d9f5fce6-c556-4146-83e2-50fb008c42e1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutVolumesID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
