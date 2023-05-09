# FollowedNetworks

### Available Operations

* [DeleteUserFollowsNetworksNetworkID](#deleteuserfollowsnetworksnetworkid) - Unfollow a network
* [GetUserFollowsNetworks](#getuserfollowsnetworks) - List the followed networks
* [GetUserFollowsNetworksNetworkID](#getuserfollowsnetworksnetworkid) - Check if a network is followed
* [PutUserFollowsNetworksNetworkID](#putuserfollowsnetworksnetworkid) - Follow a network

## DeleteUserFollowsNetworksNetworkID

Unfollow a network

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FollowedNetworks.DeleteUserFollowsNetworksNetworkID(ctx, operations.DeleteUserFollowsNetworksNetworkIDRequest{
        NetworkID: 544883,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUserFollowsNetworks

List the followed networks

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FollowedNetworks.GetUserFollowsNetworks(ctx, operations.GetUserFollowsNetworksRequest{
        Embed: operations.GetUserFollowsNetworksEmbedEnumNetwork.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NetworkFollows != nil {
        // handle response
    }
}
```

## GetUserFollowsNetworksNetworkID

Check if a network is followed

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FollowedNetworks.GetUserFollowsNetworksNetworkID(ctx, operations.GetUserFollowsNetworksNetworkIDRequest{
        NetworkID: 847252,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NetworkFollow != nil {
        // handle response
    }
}
```

## PutUserFollowsNetworksNetworkID

Follow a network

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FollowedNetworks.PutUserFollowsNetworksNetworkID(ctx, operations.PutUserFollowsNetworksNetworkIDRequest{
        NetworkID: 423655,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NetworkFollow != nil {
        // handle response
    }
}
```
