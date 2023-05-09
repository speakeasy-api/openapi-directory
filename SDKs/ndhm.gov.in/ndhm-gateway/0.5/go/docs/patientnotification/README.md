# PatientNotification

### Available Operations

* [PostV05PatientsSmsNotifyJSON](#postv05patientssmsnotifyjson) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsNotifyRaw](#postv05patientssmsnotifyraw) - API for HIP to send SMS notifications to patients
* [PostV05PatientsSmsOnNotifyJSON](#postv05patientssmsonnotifyjson) - Acknowledgment response for SMS notification sent to patient by HIP
* [PostV05PatientsSmsOnNotifyRaw](#postv05patientssmsonnotifyraw) - Acknowledgment response for SMS notification sent to patient by HIP

## PostV05PatientsSmsNotifyJSON

API to send SMS notifications to patient with custom deeplink.


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
    res, err := s.PatientNotification.PostV05PatientsSmsNotifyJSON(ctx, operations.PostV05PatientsSmsNotifyJSONRequest{
        Authorization: "unde",
        PatientSMSNotifcationRequest: shared.PatientSMSNotifcationRequest{
            Notification: shared.PatientSMSNotifcationRequestNotification{
                CareContextInfo: "X-Ray on 22nd Dec",
                DeeplinkURL: sdk.String("https://link.to.health.records/ (Optional)"),
                Hip: shared.PatientSMSNotifcationRequestNotificationHip{
                    ID: "HIP_001",
                    Name: sdk.String("Max Healthcare (Optional)"),
                },
                PhoneNo: "+91-9999999999",
                ReceiverName: sdk.String("Ramesh Singh (Optional)"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-03-09T16:14:03.266Z"),
        },
        XCmID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsSmsNotifyRaw

API to send SMS notifications to patient with custom deeplink.


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
    res, err := s.PatientNotification.PostV05PatientsSmsNotifyRaw(ctx, operations.PostV05PatientsSmsNotifyRawRequest{
        Authorization: "doloribus",
        RequestBody: []byte("recusandae"),
        XCmID: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

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
        Authorization: "facere",
        PatientSMSNotifcationResponse: shared.PatientSMSNotifcationResponse{
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("iste"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "9390066a-6d2d-4000-b553-38cec086fa21",
            },
            Status: shared.PatientSMSNotifcationResponseStatusEnumErrored.ToPointer(),
            Timestamp: types.MustTimeFromString("2022-10-07T23:33:48.836Z"),
        },
        XHipID: "ipsam",
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
        Authorization: "consequuntur",
        RequestBody: []byte("cumque"),
        XHipID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
