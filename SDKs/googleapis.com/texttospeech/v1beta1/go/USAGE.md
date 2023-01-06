<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest{
        Security: operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams{
            Parent: "totam",
        },
        QueryParams: operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams{
            DollarXgafv: "1",
            AccessToken: "perspiciatis",
            Alt: "json",
            Callback: "molestias",
            Fields: "dignissimos",
            Key: "suscipit",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "hic",
            UploadType: "quia",
            UploadProtocol: "enim",
        },
        Request: &shared.SynthesizeLongAudioRequest{
            AudioConfig: &shared.AudioConfig{
                AudioEncoding: "AUDIO_ENCODING_UNSPECIFIED",
                EffectsProfileID: []string{
                    "similique",
                    "mollitia",
                },
                Pitch: 97.199997,
                SampleRateHertz: 3342512631869028279,
                SpeakingRate: 23.100000,
                VolumeGainDb: 2.100000,
            },
            Input: &shared.SynthesisInput{
                Ssml: "temporibus",
                Text: "optio",
            },
            OutputGcsURI: "dignissimos",
            Voice: &shared.VoiceSelectionParams{
                CustomVoice: &shared.CustomVoiceParams{
                    Model: "officiis",
                    ReportedUsage: "REALTIME",
                },
                LanguageCode: "eos",
                Name: "rerum",
                SsmlGender: "NEUTRAL",
            },
        },
    }
    
    res, err := s.Projects.TexttospeechProjectsLocationsVoicesSynthesizeLongAudio(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->