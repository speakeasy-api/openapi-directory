# PayloadTemplates

### Available Operations

* [CreateNetworkWebhooksPayloadTemplate](#createnetworkwebhookspayloadtemplate) - Create a webhook payload template for a network
* [DeleteNetworkWebhooksPayloadTemplate](#deletenetworkwebhookspayloadtemplate) - Destroy a webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplate](#getnetworkwebhookspayloadtemplate) - Get the webhook payload template for a network
* [GetNetworkWebhooksPayloadTemplates](#getnetworkwebhookspayloadtemplates) - List the webhook payload templates for a network
* [UpdateNetworkWebhooksPayloadTemplate](#updatenetworkwebhookspayloadtemplate) - Update a webhook payload template for a network

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
    res, err := s.PayloadTemplates.CreateNetworkWebhooksPayloadTemplate(ctx, operations.CreateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: operations.CreateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("ea"),
            BodyFile: sdk.String("consequatur"),
            Headers: []CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Tammy Lind"),
                    Template: sdk.String("ipsam"),
                },
                operations.CreateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Tanya Heidenreich Jr."),
                    Template: sdk.String("nam"),
                },
            },
            HeadersFile: sdk.String("expedita"),
            Name: "Gene Bauch",
        },
        NetworkID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksPayloadTemplate201ApplicationJSONObject != nil {
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
    res, err := s.PayloadTemplates.DeleteNetworkWebhooksPayloadTemplate(ctx, operations.DeleteNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "impedit",
        PayloadTemplateID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.PayloadTemplates.GetNetworkWebhooksPayloadTemplate(ctx, operations.GetNetworkWebhooksPayloadTemplateRequest{
        NetworkID: "voluptatibus",
        PayloadTemplateID: "quasi",
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
    res, err := s.PayloadTemplates.GetNetworkWebhooksPayloadTemplates(ctx, operations.GetNetworkWebhooksPayloadTemplatesRequest{
        NetworkID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksPayloadTemplates200ApplicationJSONObjects != nil {
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
    res, err := s.PayloadTemplates.UpdateNetworkWebhooksPayloadTemplate(ctx, operations.UpdateNetworkWebhooksPayloadTemplateRequest{
        RequestBody: &operations.UpdateNetworkWebhooksPayloadTemplateRequestBody{
            Body: sdk.String("voluptatum"),
            BodyFile: sdk.String("hic"),
            Headers: []UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                operations.UpdateNetworkWebhooksPayloadTemplateRequestBodyHeaders{
                    Name: sdk.String("Kenneth Hackett"),
                    Template: sdk.String("consequatur"),
                },
            },
            HeadersFile: sdk.String("sunt"),
            Name: sdk.String("Maxine Deckow"),
        },
        NetworkID: "rem",
        PayloadTemplateID: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWebhooksPayloadTemplate200ApplicationJSONObject != nil {
        // handle response
    }
}
```
