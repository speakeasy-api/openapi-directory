# Profile

### Available Operations

* [PostV05PatientsProfileOnShareJSON](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [PostV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request

## PostV05PatientsProfileOnShareJSON

Result of patient share profile request at HIP end.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Profile.PostV05PatientsProfileOnShareJSON(ctx, operations.PostV05PatientsProfileOnShareJSONRequest{
        Authorization: "commodi",
        ShareProfileResult: shared.ShareProfileResult{
            Acknowledgement: shared.ShareProfileAcknowledgement{
                HealthID: "<username>@<suffix>",
                Status: shared.ShareProfileAcknowledgementStatusEnumFailure,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "deserunt",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "70c68828-2aa4-4825-a2f2-22e9817ee17c",
            },
            Timestamp: types.MustTimeFromString("2021-03-31T16:39:55.446Z"),
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

## PostV05PatientsProfileOnShareRaw

Result of patient share profile request at HIP end.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Profile.PostV05PatientsProfileOnShareRaw(ctx, operations.PostV05PatientsProfileOnShareRawRequest{
        Authorization: "aliquid",
        RequestBody: []byte("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
