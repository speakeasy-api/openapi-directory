# WebhookTests

### Available Operations

* [CreateNetworkWebhooksWebhookTest](#createnetworkwebhookswebhooktest) - Send a test webhook for a network
* [GetNetworkWebhooksWebhookTest](#getnetworkwebhookswebhooktest) - Return the status of a webhook test for a network

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
    res, err := s.WebhookTests.CreateNetworkWebhooksWebhookTest(ctx, operations.CreateNetworkWebhooksWebhookTestRequest{
        RequestBody: operations.CreateNetworkWebhooksWebhookTestRequestBody{
            AlertTypeID: sdk.String("officiis"),
            PayloadTemplateID: sdk.String("nesciunt"),
            PayloadTemplateName: sdk.String("neque"),
            SharedSecret: sdk.String("sequi"),
            URL: "at",
        },
        NetworkID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWebhooksWebhookTest201ApplicationJSONObject != nil {
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
    res, err := s.WebhookTests.GetNetworkWebhooksWebhookTest(ctx, operations.GetNetworkWebhooksWebhookTestRequest{
        NetworkID: "nihil",
        WebhookTestID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWebhooksWebhookTest200ApplicationJSONObject != nil {
        // handle response
    }
}
```
