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
            Parent: "earum",
        },
        QueryParams: operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "media",
            Callback: "ut",
            Fields: "porro",
            Key: "quo",
            OauthToken: "sed",
            PrettyPrint: true,
            QuotaUser: "quos",
            UploadType: "atque",
            UploadProtocol: "hic",
        },
        Request: &shared.SynthesizeLongAudioRequest{
            AudioConfig: &shared.AudioConfig{
                AudioEncoding: "MULAW",
                EffectsProfileID: []string{
                    "tenetur",
                },
                Pitch: 56.099998,
                SampleRateHertz: 7501805396362690206,
                SpeakingRate: 17.200001,
                VolumeGainDb: 96.199997,
            },
            Input: &shared.SynthesisInput{
                Ssml: "error",
                Text: "quaerat",
            },
            OutputGcsURI: "et",
            Voice: &shared.VoiceSelectionParams{
                CustomVoice: &shared.CustomVoiceParams{
                    Model: "aut",
                    ReportedUsage: "OFFLINE",
                },
                LanguageCode: "pariatur",
                Name: "magni",
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