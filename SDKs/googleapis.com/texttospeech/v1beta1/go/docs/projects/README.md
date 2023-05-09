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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        Name: "Ken Kshlerin",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("quis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("repellendus"),
        Filter: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        Name: "Teri Strosin",
        OauthToken: sdk.String("quod"),
        PageSize: sdk.Int64(800911),
        PageToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SynthesizeLongAudioRequest: &shared.SynthesizeLongAudioRequest{
            AudioConfig: &shared.AudioConfig{
                AudioEncoding: shared.AudioConfigAudioEncodingEnumMulaw.ToPointer(),
                EffectsProfileID: []string{
                    "occaecati",
                    "fugit",
                    "deleniti",
                },
                Pitch: sdk.Float64(9446.69),
                SampleRateHertz: sdk.Int(758616),
                SpeakingRate: sdk.Float64(5218.48),
                VolumeGainDb: sdk.Float64(1059.07),
            },
            Input: &shared.SynthesisInput{
                Ssml: sdk.String("commodi"),
                Text: sdk.String("molestiae"),
            },
            OutputGcsURI: sdk.String("modi"),
            Voice: &shared.VoiceSelectionParams{
                CustomVoice: &shared.CustomVoiceParams{
                    Model: sdk.String("qui"),
                    ReportedUsage: shared.CustomVoiceParamsReportedUsageEnumOffline.ToPointer(),
                },
                LanguageCode: sdk.String("cum"),
                Name: sdk.String("Edna Mante II"),
                SsmlGender: shared.VoiceSelectionParamsSsmlGenderEnumFemale.ToPointer(),
            },
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
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
