# RootHypervVM

### Available Operations

* [GetHypervVirtualMachineForceFullSpec](#gethypervvirtualmachineforcefullspec) - Retrieve the configuration which has been set for forcing a full snapshot for a Hyper-V Virtual Machine
* [RequestHypervVirtualMachineForceFullSnapshot](#requesthypervvirtualmachineforcefullsnapshot) - Request a full snapshot during next backup job of a Hyper-V virtual machine

## GetHypervVirtualMachineForceFullSpec

Retrieve the configuration created to force a full snapshot for a Hyper-V Virtual Machine.

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
    res, err := s.RootHypervVM.GetHypervVirtualMachineForceFullSpec(ctx, operations.GetHypervVirtualMachineForceFullSpecRequest{
        ID: "af91e506-ef89-40a5-8b47-5f16f56d385a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HypervVirtualMachineForceFullResponse != nil {
        // handle response
    }
}
```

## RequestHypervVirtualMachineForceFullSnapshot

Request a full snapshot during the next backup job of a Hyper-V virtual machine.

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
    res, err := s.RootHypervVM.RequestHypervVirtualMachineForceFullSnapshot(ctx, operations.RequestHypervVirtualMachineForceFullSnapshotRequest{
        HypervVirtualMachineForceFullRequest: shared.HypervVirtualMachineForceFullRequest{
            VirtualDiskInfos: []shared.HypervVirtualDiskForceFullInfo{
                shared.HypervVirtualDiskForceFullInfo{
                    ShouldDedupe: false,
                    VirtualDiskID: "maxime",
                },
            },
        },
        ID: "4ac631b9-9e26-4ced-8f9f-db9410f63bbf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HypervVirtualMachineForceFullResponse != nil {
        // handle response
    }
}
```
