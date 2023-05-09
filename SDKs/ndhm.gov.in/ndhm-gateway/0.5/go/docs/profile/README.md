# Profile

### Available Operations

* [PostV05PatientsProfileOnShareJSON](#postv05patientsprofileonsharejson) - Response to patient's share profile request
* [PostV05PatientsProfileOnShareRaw](#postv05patientsprofileonshareraw) - Response to patient's share profile request
* [PostV05PatientsProfileShareJSON](#postv05patientsprofilesharejson) - Share patient profile details
* [PostV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details

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
        Authorization: "non",
        ShareProfileResult: shared.ShareProfileResult{
            Acknowledgement: shared.ShareProfileAcknowledgement{
                HealthID: "<username>@<suffix>",
                Status: shared.ShareProfileAcknowledgementStatusEnumSuccess,
            },
            Error: &shared.Error{
                Code: shared.ErrorCodeEnumOneThousand.ToPointer(),
                Message: sdk.String("molestias"),
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Resp: shared.RequestReference{
                RequestID: "167b8e3c-8db0-4340-8d6d-364ffd455906",
            },
            Timestamp: types.MustTimeFromString("2022-08-26T00:43:51.707Z"),
        },
        XCmID: "quia",
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
        Authorization: "commodi",
        RequestBody: []byte("neque"),
        XCmID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsProfileShareJSON

Request for sharing patient's profile details to HIP


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
    res, err := s.Profile.PostV05PatientsProfileShareJSON(ctx, operations.PostV05PatientsProfileShareJSONRequest{
        Authorization: "numquam",
        ShareProfileRequest: shared.ShareProfileRequest{
            Patient: shared.ShareProfileRequestPatient{
                HipCode: sdk.String("12345 (CounterId)"),
                UserDemographics: shared.ShareProfileRequestPatientUserDemographics{
                    Address: &shared.PatientAddress{
                        District: sdk.String("rem"),
                        Line: sdk.String("officiis"),
                        Pincode: sdk.String("omnis"),
                        State: sdk.String("neque"),
                    },
                    DayOfBirth: sdk.Int64(359874),
                    Gender: shared.PatientGenderEnumU,
                    HealthID: "<username>@<suffix>",
                    HealthIDNumber: "1111-1111-1111-11",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumHealthID.ToPointer(),
                            Value: sdk.String("+919800083232"),
                        },
                    },
                    MonthOfBirth: sdk.Int64(570039),
                    Name: "Jane Doe",
                    YearOfBirth: 2000,
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2021-05-06T19:16:47.821Z"),
        },
        XHipID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05PatientsProfileShareRaw

Request for sharing patient's profile details to HIP


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
    res, err := s.Profile.PostV05PatientsProfileShareRaw(ctx, operations.PostV05PatientsProfileShareRawRequest{
        Authorization: "sapiente",
        RequestBody: []byte("ipsum"),
        XHipID: "consequatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
