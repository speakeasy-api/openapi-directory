# Replicas

### Available Operations

* [ReplicapoolReplicasDelete](#replicapoolreplicasdelete) - Deletes a replica from the pool.
* [ReplicapoolReplicasGet](#replicapoolreplicasget) - Gets information about a specific replica.
* [ReplicapoolReplicasList](#replicapoolreplicaslist) - Lists all replicas in a pool.
* [ReplicapoolReplicasRestart](#replicapoolreplicasrestart) - Restarts a replica in a pool.

## ReplicapoolReplicasDelete

Deletes a replica from the pool.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Replicas.ReplicapoolReplicasDelete(ctx, operations.ReplicapoolReplicasDeleteRequest{
        ReplicasDeleteRequest: &shared.ReplicasDeleteRequest{
            AbandonInstance: sdk.Bool(false),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("atque"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("fugiat"),
        PoolName: "ab",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "soluta",
        QuotaUser: sdk.String("dolorum"),
        ReplicaName: "iusto",
        UserIP: sdk.String("voluptate"),
        Zone: "dolorum",
    }, operations.ReplicapoolReplicasDeleteSecurity{
        Option1: &operations.ReplicapoolReplicasDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplicapoolReplicasGet

Gets information about a specific replica.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Replicas.ReplicapoolReplicasGet(ctx, operations.ReplicapoolReplicasGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("necessitatibus"),
        PoolName: "distinctio",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "asperiores",
        QuotaUser: sdk.String("nihil"),
        ReplicaName: "ipsum",
        UserIP: sdk.String("voluptate"),
        Zone: "id",
    }, operations.ReplicapoolReplicasGetSecurity{
        Option1: &operations.ReplicapoolReplicasGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplicapoolReplicasList

Lists all replicas in a pool.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Replicas.ReplicapoolReplicasList(ctx, operations.ReplicapoolReplicasListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("saepe"),
        Key: sdk.String("eius"),
        MaxResults: sdk.Int64(137220),
        OauthToken: sdk.String("perferendis"),
        PageToken: sdk.String("amet"),
        PoolName: "optio",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "accusamus",
        QuotaUser: sdk.String("ad"),
        UserIP: sdk.String("saepe"),
        Zone: "suscipit",
    }, operations.ReplicapoolReplicasListSecurity{
        Option1: &operations.ReplicapoolReplicasListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ReplicapoolReplicasRestart

Restarts a replica in a pool.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Replicas.ReplicapoolReplicasRestart(ctx, operations.ReplicapoolReplicasRestartRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("minima"),
        PoolName: "repellendus",
        PrettyPrint: sdk.Bool(false),
        ProjectName: "totam",
        QuotaUser: sdk.String("similique"),
        ReplicaName: "alias",
        UserIP: sdk.String("at"),
        Zone: "quaerat",
    }, operations.ReplicapoolReplicasRestartSecurity{
        Option1: &operations.ReplicapoolReplicasRestartSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
