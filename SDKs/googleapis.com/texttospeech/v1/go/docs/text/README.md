# Text

### Available Operations

* [TexttospeechTextSynthesize](#texttospeechtextsynthesize) - Synthesizes speech synchronously: receive results after all text input has been processed.

## TexttospeechTextSynthesize

Synthesizes speech synchronously: receive results after all text input has been processed.

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
    res, err := s.Text.TexttospeechTextSynthesize(ctx, operations.TexttospeechTextSynthesizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SynthesizeSpeechRequest: &shared.SynthesizeSpeechRequest{
            AudioConfig: &shared.AudioConfig{
                AudioEncoding: shared.AudioConfigAudioEncodingEnumMp3.ToPointer(),
                EffectsProfileID: []string{
                    "laborum",
                },
                Pitch: sdk.Float64(6563.3),
                SampleRateHertz: sdk.Int(317202),
                SpeakingRate: sdk.Float64(1381.83),
                VolumeGainDb: sdk.Float64(7783.46),
            },
            Input: &shared.SynthesisInput{
                Ssml: sdk.String("sequi"),
                Text: sdk.String("tenetur"),
            },
            Voice: &shared.VoiceSelectionParams{
                CustomVoice: &shared.CustomVoiceParams{
                    Model: sdk.String("ipsam"),
                    ReportedUsage: shared.CustomVoiceParamsReportedUsageEnumRealtime.ToPointer(),
                },
                LanguageCode: sdk.String("possimus"),
                Name: sdk.String("Joyce Mueller"),
                SsmlGender: shared.VoiceSelectionParamsSsmlGenderEnumSsmlVoiceGenderUnspecified.ToPointer(),
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.TexttospeechTextSynthesizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SynthesizeSpeechResponse != nil {
        // handle response
    }
}
```
