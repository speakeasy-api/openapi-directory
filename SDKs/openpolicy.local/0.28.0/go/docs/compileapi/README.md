# CompileAPI

## Overview

Posting partial queries to OPA

### Available Operations

* [PostCompile](#postcompile) - Compile

## PostCompile

This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):

```yaml
package example
allow {
  input.subject.clearance_level >= data.reports[_].clearance_level
}
```
Compile API **request body** so that it contain the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `query` | `string` | Yes | The query to partially evaluate and compile. |
| `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
| `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |

For example:

```json
{
  "query": "data.example.allow == true",
  "input": {
    "subject": {
      "clearance_level": 4
    }
  },
  "unknowns": [
    "data.reports"
    ]
}
```
### Partial evaluation
In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.

Partial evaluation article
<https://blog.openpolicyagent.org/partial-evaluation-162750eaf422>

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CompileAPI.PostCompile(ctx, operations.PostCompileRequest{
        RequestBody: map[string]interface{}{
            "error": "deserunt",
            "suscipit": "iure",
        },
        Explain: sdk.String("magnam"),
        Instrument: sdk.Bool(false),
        Metrics: sdk.Bool(false),
        Pretty: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostCompile200ApplicationJSONObject != nil {
        // handle response
    }
}
```
