# RootReplication

## Overview

Replication.

### Available Operations

* [DisablePerLocationPause](#disableperlocationpause) - Resume replication from specified source clusters
* [EnablePerLocationPause](#enableperlocationpause) - Pause replication from specified source clusters

## DisablePerLocationPause

A single Rubrik cluster can be the replication target for multiple source Rubrik clusters. For each source cluster specified, this resumes replication from that source cluster to the target cluster. This call must be made on the target cluster.


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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootReplication.DisablePerLocationPause(ctx, shared.DisablePerLocationPause{
        ShouldSkipOldSnapshots: false,
        SourceClusterUuids: []string{
            "adipisci",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EnablePerLocationPause

A single Rubrik cluster can be the replication target for multiple source Rubrik clusters. For each source cluster specified, this pauses replication from that source cluster to the target cluster. This call must be made on the target cluster.


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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootReplication.EnablePerLocationPause(ctx, shared.EnablePerLocationPause{
        ShouldCancelImmediately: false,
        SourceClusterUuids: []string{
            "quis",
            "quos",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
