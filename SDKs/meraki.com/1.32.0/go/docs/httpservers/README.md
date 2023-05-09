# HTTPServers

### Available Operations

* [CreateNetworkWebhooksHTTPServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [DeleteNetworkWebhooksHTTPServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [GetNetworkWebhooksHTTPServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [UpdateNetworkWebhooksHTTPServer](#updatenetworkwebhookshttpserver) - Update an HTTP server

## CreateNetworkWebhooksHTTPServer

Add an HTTP server to a network

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.HTTPServers.CreateNetworkWebhooksHTTPServer(ctx, operations.CreateNetworkWebhooksHTTPServerRequest{
        RequestBody: operations.CreateNetworkWebhooksHTTPServerRequestBody{
            Name: "Jorge Adams",
            PayloadTemplate: &operations.CreateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                Name: sdk.String("Gladys Bergnaum III"),
                PayloadTemplateID: sdk.String("maiores"),
            },
            SharedSecret: sdk.String("voluptatem"),
            URL: "tempore",
        },
        NetworkID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksHTTPServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkWebhooksHTTPServer

Delete an HTTP server from a network

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.HTTPServers.DeleteNetworkWebhooksHTTPServer(ctx, operations.DeleteNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "voluptates",
        NetworkID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkWebhooksHTTPServer

Return an HTTP server for a network

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.HTTPServers.GetNetworkWebhooksHTTPServer(ctx, operations.GetNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "enim",
        NetworkID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksHTTPServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksHTTPServers

List the HTTP servers for a network

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.HTTPServers.GetNetworkWebhooksHTTPServers(ctx, operations.GetNetworkWebhooksHTTPServersRequest{
        NetworkID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksHTTPServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkWebhooksHTTPServer

Update an HTTP server. To change a URL, create a new HTTP server.

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.HTTPServers.UpdateNetworkWebhooksHTTPServer(ctx, operations.UpdateNetworkWebhooksHTTPServerRequest{
        RequestBody: &operations.UpdateNetworkWebhooksHTTPServerRequestBody{
            Name: sdk.String("Mrs. Jennie Kessler"),
            PayloadTemplate: &operations.UpdateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                PayloadTemplateID: sdk.String("quisquam"),
            },
            SharedSecret: sdk.String("iste"),
        },
        HTTPServerID: "quam",
        NetworkID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksHTTPServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
