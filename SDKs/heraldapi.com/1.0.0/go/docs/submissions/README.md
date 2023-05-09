# Submissions

### Available Operations

* [GetSubmissionsSubmissionID](#getsubmissionssubmissionid) - /submissions/{submission_id}
* [PostSubmissions](#postsubmissions) - /submissions

## GetSubmissionsSubmissionID

### Get a submission

Get the latest details for a specific [submission](https://www.heraldapi.com/docs/submission).

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
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Submissions.GetSubmissionsSubmissionID(ctx, operations.GetSubmissionsSubmissionIDRequest{
        SubmissionID: "1959890a-fa56-43e2-916f-e4c8b711e5b7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSubmissionsSubmissionID200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostSubmissions

### Create a submission

A [submission](https://www.heraldapi.com/docs/submission) creates quotes by sending an application to the institutions associated with a list of desired products. A submission can be for a single product or multiple products.

> The `application` object of the request can either be a full application (with all `risk_values` and `coverage_values`), or the `id` of a completed application created via [`/applications`](../reference/HeraldAPI.v1.yaml/paths/~1applications/post). See the 'examples' dropdown to the right for example requests and responses.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Submissions.PostSubmissions(ctx, operations.PostSubmissionsRequestBody{
        Application: operations.PostSubmissionsRequestBodyApplication{},
        ProducerID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostSubmissions200ApplicationJSONObject != nil {
        // handle response
    }
}
```
