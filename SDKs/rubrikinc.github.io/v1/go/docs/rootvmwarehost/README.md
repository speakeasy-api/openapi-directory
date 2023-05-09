# RootVmwareHost

## Overview

VMware hypervisor hosts.

### Available Operations

* [GetVmwareHost](#getvmwarehost) - Get details of a ESXi hypervisor
* [GetVmwareHostDatastore](#getvmwarehostdatastore) - Get details of datastores in a ESXi hypervisor
* [QueryVmwareHost](#queryvmwarehost) - Get summary of all the ESXi hypervisor
* [UpdateVmwareHost](#updatevmwarehost) - Update the SLA Domain for an ESXi hypervisor

## GetVmwareHost

Get details of a ESXi hypervisor.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareHost.GetVmwareHost(ctx, operations.GetVmwareHostRequest{
        ID: "c97716c8-02cc-49e0-87d9-d323f1aa63ed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareHostDetail != nil {
        // handle response
    }
}
```

## GetVmwareHostDatastore

Get details of datastores in a ESXi hypervisor.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareHost.GetVmwareHostDatastore(ctx, operations.GetVmwareHostDatastoreRequest{
        ID: "9cf1c856-bcba-451e-b245-4a47facf116c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareHostDatastoreDetail != nil {
        // handle response
    }
}
```

## QueryVmwareHost

Get summary of all the ESXi hypervisor.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareHost.QueryVmwareHost(ctx, operations.QueryVmwareHostRequest{
        ComputeClusterID: sdk.String("fugiat"),
        PrimaryClusterID: sdk.String("facere"),
        SnappableStatus: operations.QueryVmwareHostSnappableStatusEnumProtectable.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareHostSummaryListResponse != nil {
        // handle response
    }
}
```

## UpdateVmwareHost

Update the SLA Domain that is configured for an ESXi hypervisor.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareHost.UpdateVmwareHost(ctx, operations.UpdateVmwareHostRequest{
        VmwareHostUpdate: shared.VmwareHostUpdate{
            ConfiguredSLADomainID: sdk.String("exercitationem"),
        },
        ID: "444a7562-873c-47dd-9efa-f43dc623620f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareHostDetail != nil {
        // handle response
    }
}
```
