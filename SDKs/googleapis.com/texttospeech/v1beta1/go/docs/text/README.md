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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SynthesizeSpeechRequest: &shared.SynthesizeSpeechRequest{
            AudioConfig: &shared.AudioConfig{
                AudioEncoding: shared.AudioConfigAudioEncodingEnumMp364Kbps.ToPointer(),
                EffectsProfileID: []string{
                    "quidem",
                    "architecto",
                    "ipsa",
                    "reiciendis",
                },
                Pitch: sdk.Float64(6667.67),
                SampleRateHertz: sdk.Int(653140),
                SpeakingRate: sdk.Float64(6706.38),
                VolumeGainDb: sdk.Float64(1709.09),
            },
            EnableTimePointing: []shared.SynthesizeSpeechRequestEnableTimePointingEnum{
                shared.SynthesizeSpeechRequestEnableTimePointingEnumTimepointTypeUnspecified,
            },
            Input: &shared.SynthesisInput{
                Ssml: sdk.String("explicabo"),
                Text: sdk.String("nobis"),
            },
            Voice: &shared.VoiceSelectionParams{
                CustomVoice: &shared.CustomVoiceParams{
                    Model: sdk.String("enim"),
                    ReportedUsage: shared.CustomVoiceParamsReportedUsageEnumRealtime.ToPointer(),
                },
                LanguageCode: sdk.String("nemo"),
                Name: sdk.String("Velma Batz"),
                SsmlGender: shared.VoiceSelectionParamsSsmlGenderEnumNeutral.ToPointer(),
            },
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
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
