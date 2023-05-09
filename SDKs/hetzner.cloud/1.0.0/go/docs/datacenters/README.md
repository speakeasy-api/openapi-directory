# Datacenters

## Overview

Each Datacenter represents a *virtual* Datacenter which is made up of possible many physical Datacenters where Servers are hosted.

Datacenter names are composed from their Location and virtual Datacenter number, for example `fsn1-dc14` means virtual Datacenter `14` in Location `fsn1`.

Right now there is only one Datacenter for each Location. The Datacenter numbers for `fsn`, `nbg` and `hel` are arbitrarily set to `14`, `3` and `2` for historic reasons and do not represent real physical Hetzner datacenters.


### Available Operations

* [GetDatacenters](#getdatacenters) - Get all Datacenters
* [GetDatacentersID](#getdatacentersid) - Get a Datacenter

## GetDatacenters

Returns all Datacenter objects.

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
    res, err := s.Datacenters.GetDatacenters(ctx, operations.GetDatacentersRequest{
        Name: sdk.String("Miss Lowell Parisian"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatacenters200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDatacentersID

Returns a specific Datacenter object.

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
    res, err := s.Datacenters.GetDatacentersID(ctx, operations.GetDatacentersIDRequest{
        ID: 582020,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDatacentersID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
