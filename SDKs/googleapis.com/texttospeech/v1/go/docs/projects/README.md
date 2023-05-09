# Projects

### Available Operations

* [TexttospeechProjectsLocationsOperationsGet](#texttospeechprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [TexttospeechProjectsLocationsOperationsList](#texttospeechprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [TexttospeechProjectsLocationsSynthesizeLongAudio](#texttospeechprojectslocationssynthesizelongaudio) - Synthesizes long form text asynchronously.

## TexttospeechProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TexttospeechProjectsLocationsOperationsGet(ctx, operations.TexttospeechProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        Name: "Cory Emmerich",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    }, operations.TexttospeechProjectsLocationsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TexttospeechProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TexttospeechProjectsLocationsOperationsList(ctx, operations.TexttospeechProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        Name: "Stacy Moore",
        OauthToken: sdk.String("quidem"),
        PageSize: sdk.Int64(99280),
        PageToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.TexttospeechProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## TexttospeechProjectsLocationsSynthesizeLongAudio

Synthesizes long form text asynchronously.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.TexttospeechProjectsLocationsSynthesizeLongAudio(ctx, operations.TexttospeechProjectsLocationsSynthesizeLongAudioRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SynthesizeLongAudioRequest: &shared.SynthesizeLongAudioRequest{
            AudioConfig: &shared.AudioConfig{
                AudioEncoding: shared.AudioConfigAudioEncodingEnumLinear16.ToPointer(),
                EffectsProfileID: []string{
                    "corporis",
                },
                Pitch: sdk.Float64(1289.26),
                SampleRateHertz: sdk.Int(750686),
                SpeakingRate: sdk.Float64(3154.28),
                VolumeGainDb: sdk.Float64(6078.31),
            },
            Input: &shared.SynthesisInput{
                Ssml: sdk.String("nemo"),
                Text: sdk.String("minima"),
            },
            OutputGcsURI: sdk.String("excepturi"),
            Voice: &shared.VoiceSelectionParams{
                CustomVoice: &shared.CustomVoiceParams{
                    Model: sdk.String("accusantium"),
                    ReportedUsage: shared.CustomVoiceParamsReportedUsageEnumRealtime.ToPointer(),
                },
                LanguageCode: sdk.String("culpa"),
                Name: sdk.String("Darrin Brakus"),
                SsmlGender: shared.VoiceSelectionParamsSsmlGenderEnumFemale.ToPointer(),
            },
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("commodi"),
        Parent: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("error"),
    }, operations.TexttospeechProjectsLocationsSynthesizeLongAudioSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
