# SDK

## Overview

This data processing api uses regression analysis to allow you to find out which contributing variables have the most effect on an outcome. For example does buyer location or price most effect sales ?

<https://services.scideas.net/regression>
### Available Operations

* [PostRegressionAPI](#postregressionapi) - Returns regression analysis.

## PostRegressionAPI

Returns regression analysis.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostRegressionAPI(ctx, shared.RegressionAPIBody{
        ConvertDateTo: sdk.String("month"),
        Data: []map[string]interface{}{
            map[string]interface{}{
                "ipsam": "repellendus",
            },
            map[string]interface{}{
                "quo": "odit",
                "at": "at",
                "maiores": "molestiae",
                "quod": "quod",
            },
            map[string]interface{}{
                "totam": "porro",
                "dolorum": "dicta",
            },
        },
        IgnoreVariables: []map[string]interface{}{
            map[string]interface{}{
                "occaecati": "fugit",
                "deleniti": "hic",
                "optio": "totam",
            },
            map[string]interface{}{
                "commodi": "molestiae",
            },
            map[string]interface{}{
                "qui": "impedit",
                "cum": "esse",
            },
        },
        Key: "abc123",
        OutcomeVariable: "sales",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
}
```
