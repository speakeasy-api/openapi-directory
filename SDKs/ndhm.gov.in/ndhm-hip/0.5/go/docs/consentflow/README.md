# ConsentFlow

### Available Operations

* [PostV05ConsentsHipNotifyJSON](#postv05consentshipnotifyjson) - Consent notification
* [PostV05ConsentsHipNotifyRaw](#postv05consentshipnotifyraw) - Consent notification

## PostV05ConsentsHipNotifyJSON

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 


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
    res, err := s.ConsentFlow.PostV05ConsentsHipNotifyJSON(ctx, operations.PostV05ConsentsHipNotifyJSONRequest{
        Authorization: "tempora",
        HIPConsentNotification: shared.HIPConsentNotification{
            Notification: shared.HIPConsentNotificationNotification{
                ConsentDetail: shared.HIPConsentNotificationNotificationConsentDetail{
                    CareContexts: []shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                        shared.HIPConsentNotificationNotificationConsentDetailCareContexts{
                            CareContextReference: "Episode1",
                            PatientReference: "hinapatel79@hospital",
                        },
                    },
                    ConsentID: "ce2af7a7-3cf3-4be4-93f8-70b326b5a734",
                    ConsentManager: shared.HIPConsentNotificationNotificationConsentDetailConsentManager{
                        ID: "29cdb1a8-422b-4b67-9d23-22715bf0cbb1",
                    },
                    CreatedAt: types.MustTimeFromString("2022-05-07T21:24:02.842Z"),
                    HiTypes: []shared.HITypeEnumEnum{
                        shared.HITypeEnumEnumDischargeSummary,
                    },
                    Hip: shared.HIPConsentNotificationNotificationConsentDetailHIP{
                        ID: "8b90f344-3a11-408e-8adc-f4b921879fce",
                    },
                    Patient: shared.ConsentManagerPatientID{
                        ID: "hinapatel79@ndhm",
                    },
                    Permission: shared.Permission{
                        AccessMode: shared.PermissionAccessModeEnumQuery,
                        DataEraseAt: types.MustTimeFromString("2022-10-13T06:47:27.001Z"),
                        DateRange: shared.PermissionDateRange{
                            From: types.MustTimeFromString("2021-08-20T14:09:47.998Z"),
                            To: types.MustTimeFromString("2022-02-14T05:06:03.793Z"),
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: sdk.Int64(949319),
                            Unit: shared.PermissionFrequencyUnitEnumDay.ToPointer(),
                            Value: sdk.Int64(941378),
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "distinctio",
                        RefURI: sdk.String("https://light-papa.net"),
                        Text: "vero",
                    },
                    SchemaVersion: sdk.String("ducimus"),
                },
                ConsentID: "4dd39c0f-5d2c-4ff7-870a-45626d436813",
                Signature: "Signature of CM as defined in W3C standards; Base64 encoded",
                Status: shared.ConsentStatusEnumRevoked,
            },
            RequestID: "5f7a535d-a3fd-416b-b069-c97d021fbacd",
            Timestamp: types.MustTimeFromString("2022-08-05T18:23:03.713Z"),
        },
        XHipID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostV05ConsentsHipNotifyRaw

Notification of consents to health information providers consent request granted, consent revoked, consent expired. Only the GRANTED and REVOKED status notifications will be sent to HIP.
  1. If consent is granted, status=GRANTED, then consentDetail contains the consent artefact details and signature is available. 
  2. If consent is revoked, then status=REVOKED, and consentId specifes which consent artefact is revoked. 


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
    res, err := s.ConsentFlow.PostV05ConsentsHipNotifyRaw(ctx, operations.PostV05ConsentsHipNotifyRawRequest{
        Authorization: "excepturi",
        RequestBody: []byte("voluptatibus"),
        XHipID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
