# Webhooks

### Available Operations

* [CreateNetworkWebhooksHTTPServer](#createnetworkwebhookshttpserver) - Add an HTTP server to a network
* [CreateNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [CreateNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [DeleteNetworkWebhooksHTTPServer](#deletenetworkwebhookshttpserver) - Delete an HTTP server from a network
* [DeleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [GetNetworkWebhooksHTTPServer](#getnetworkwebhookshttpserver) - Return an HTTP server for a network
* [GetNetworkWebhooksHTTPServers](#getnetworkwebhookshttpservers) - List the HTTP servers for a network
* [GetNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [GetNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network
* [GetOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts
* [GetOrganizationWebhooksLogs](#getorganizationwebhookslogs) - Return the log of webhook POSTs sent
* [UpdateNetworkWebhooksHTTPServer](#updatenetworkwebhookshttpserver) - Update an HTTP server
* [UpdateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

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
    res, err := s.Webhooks.CreateNetworkWebhooksHTTPServer(ctx, operations.CreateNetworkWebhooksHTTPServerRequest{
        RequestBody: operations.CreateNetworkWebhooksHTTPServerRequestBody{
            Name: "Jose Ledner",
            PayloadTemplate: &operations.CreateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                Name: sdk.String("Katherine Mills"),
                PayloadTemplateID: sdk.String("totam"),
            },
            SharedSecret: sdk.String("consequatur"),
            URL: "recusandae",
        },
        NetworkID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksHTTPServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksPayloadTemplate

Create a webhook payload template for a network

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
    res, err := s.Webhooks.CreateNetworkWebhooksPayloadTemplate(ctx, operations.CreateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: operations.CreateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("cupiditate"),
            BodyFile: sdk.String("corporis"),
            Headers: []CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Miss Don Stamm"),
                    Template: sdk.String("commodi"),
                },
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Eunice Dare"),
                    Template: sdk.String("quisquam"),
                },
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Mitchell Batz"),
                    Template: sdk.String("numquam"),
                },
            },
            HeadersFile: sdk.String("eos"),
            Name: "Aaron Stehr",
        },
        NetworkID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksPayloadTemplate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateNetworkWebhooksWebhookTest

Send a test webhook for a network

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
    res, err := s.Webhooks.CreateNetworkWebhooksWebhookTest(ctx, operations.CreateNetworkWebhooksWebhookTestRequest{
        RequestBody: operations.CreateNetworkWebhooksWebhookTestRequestBody{
            AlertTypeID: sdk.String("sit"),
            PayloadTemplateID: sdk.String("placeat"),
            PayloadTemplateName: sdk.String("iure"),
            SharedSecret: sdk.String("dolorem"),
            URL: "laudantium",
        },
        NetworkID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksWebhookTest201ApplicationJSONObject != nil {
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
    res, err := s.Webhooks.DeleteNetworkWebhooksHTTPServer(ctx, operations.DeleteNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "ipsum",
        NetworkID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetworkWebhooksPayloadTemplate

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

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
    res, err := s.Webhooks.DeleteNetworkWebhooksPayloadTemplate(ctx, operations.DeleteNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "maxime",
        PayloadTemplateID: "reprehenderit",
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
    res, err := s.Webhooks.GetNetworkWebhooksHTTPServer(ctx, operations.GetNetworkWebhooksHTTPServerRequest{
        HTTPServerID: "libero",
        NetworkID: "asperiores",
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
    res, err := s.Webhooks.GetNetworkWebhooksHTTPServers(ctx, operations.GetNetworkWebhooksHTTPServersRequest{
        NetworkID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksHTTPServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksPayloadTemplate

Get the webhook payload template for a network

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
    res, err := s.Webhooks.GetNetworkWebhooksPayloadTemplate(ctx, operations.GetNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "cupiditate",
        PayloadTemplateID: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksPayloadTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksPayloadTemplates

List the webhook payload templates for a network

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
    res, err := s.Webhooks.GetNetworkWebhooksPayloadTemplates(ctx, operations.GetNetworkWebhooksPayloadTemplatesRequest{
        NetworkID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksPayloadTemplates200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWebhooksWebhookTest

Return the status of a webhook test for a network

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
    res, err := s.Webhooks.GetNetworkWebhooksWebhookTest(ctx, operations.GetNetworkWebhooksWebhookTestRequest{
        NetworkID: "excepturi",
        WebhookTestID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksWebhookTest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

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
    res, err := s.Webhooks.GetOrganizationWebhooksAlertTypes(ctx, operations.GetOrganizationWebhooksAlertTypesRequest{
        OrganizationID: "commodi",
        ProductType: operations.GetOrganizationWebhooksAlertTypesProductTypeEnumSm.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWebhooksAlertTypes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationWebhooksLogs

Return the log of webhook POSTs sent

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
    res, err := s.Webhooks.GetOrganizationWebhooksLogs(ctx, operations.GetOrganizationWebhooksLogsRequest{
        EndingBefore: sdk.String("sed"),
        OrganizationID: "a",
        PerPage: sdk.Int64(968430),
        StartingAfter: sdk.String("voluptate"),
        T0: sdk.String("voluptate"),
        T1: sdk.String("maiores"),
        Timespan: sdk.Float32(3345.51),
        URL: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWebhooksLogs200ApplicationJSONObjects != nil {
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
    res, err := s.Webhooks.UpdateNetworkWebhooksHTTPServer(ctx, operations.UpdateNetworkWebhooksHTTPServerRequest{
        RequestBody: &operations.UpdateNetworkWebhooksHTTPServerRequestBody{
            Name: sdk.String("Dominick Schmitt MD"),
            PayloadTemplate: &operations.UpdateNetworkWebhooksHTTPServerRequestBodyPayloadTemplate{
                PayloadTemplateID: sdk.String("veritatis"),
            },
            SharedSecret: sdk.String("error"),
        },
        HTTPServerID: "et",
        NetworkID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksHTTPServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWebhooksPayloadTemplate

Update a webhook payload template for a network

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
    res, err := s.Webhooks.UpdateNetworkWebhooksPayloadTemplate(ctx, operations.UpdateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: &operations.UpdateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("accusantium"),
            BodyFile: sdk.String("nesciunt"),
            Headers: []UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Tina Lubowitz"),
                    Template: sdk.String("illum"),
                },
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Gwendolyn Watsica"),
                    Template: sdk.String("nemo"),
                },
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Alexandra Daugherty"),
                    Template: sdk.String("consectetur"),
                },
            },
            HeadersFile: sdk.String("suscipit"),
            Name: sdk.String("Julius Reilly V"),
        },
        NetworkID: "consequuntur",
        PayloadTemplateID: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksPayloadTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
