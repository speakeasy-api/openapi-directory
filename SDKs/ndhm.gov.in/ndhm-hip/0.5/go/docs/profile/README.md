# Profile

### Available Operations

* [PostV05PatientsProfileShareJSON](#postv05patientsprofilesharejson) - Share patient profile details
* [PostV05PatientsProfileShareRaw](#postv05patientsprofileshareraw) - Share patient profile details

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
        Authorization: "minima",
        ShareProfileRequest: shared.ShareProfileRequest{
            Patient: shared.ShareProfileRequestPatient{
                HipCode: sdk.String("12345 (CounterId)"),
                UserDemographics: shared.ShareProfileRequestPatientUserDemographics{
                    Address: &shared.PatientAddress{
                        District: sdk.String("nobis"),
                        Line: sdk.String("dolorum"),
                        Pincode: sdk.String("adipisci"),
                        State: sdk.String("minus"),
                    },
                    DayOfBirth: sdk.Int64(171853),
                    Gender: shared.PatientGenderEnumO,
                    HealthID: "<username>@<suffix>",
                    HealthIDNumber: "1111-1111-1111-11",
                    Identifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMr,
                            Value: "+919800083232",
                        },
                        shared.Identifier{
                            Type: shared.IdentifierTypeEnumMr,
                            Value: "+919800083232",
                        },
                    },
                    MonthOfBirth: sdk.Int64(885963),
                    Name: "Jane Doe",
                    YearOfBirth: 2000,
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2021-12-11T16:50:29.051Z"),
        },
        XHipID: "adipisci",
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
        Authorization: "cum",
        RequestBody: []byte("blanditiis"),
        XHipID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
