# PatientNotification

### Available Operations

* [PostV05PatientsSmsOnNotifyJSON](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

## PostV05PatientsSmsOnNotifyJSON

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


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
    res, err := s.PatientNotification.PostV05PatientsSmsOnNotifyJSON(ctx, operations.PostV05PatientsSmsOnNotifyJSONRequest{
        Authorization: "recusandae",
        PatientSMSNotifcationResponse: shared.PatientSMSNotifcationResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand,
                Message: "aperiam",
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "b375ed4f-6fbe-4e41-b333-17fe35b60eb1",
            },
            Status: shared.PatientSMSNotifcationResponseStatusEnumErrored.ToPointer(),
            Timestamp: types.MustTimeFromString("2022-06-16T02:54:19.259Z"),
        },
        XHipID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsSmsOnNotifyRaw

If the SMS notification is successfully sent to patient then "status" will be "ACKNOWLEDGED" with no error.
If the SMS notification is failed then "status" will be "ERRORED" with error.


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
    res, err := s.PatientNotification.PostV05PatientsSmsOnNotifyRaw(ctx, operations.PostV05PatientsSmsOnNotifyRawRequest{
        Authorization: "voluptas",
        RequestBody: []byte("voluptas"),
        XHipID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
