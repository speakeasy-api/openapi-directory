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
            Parent: "sit",
        },
        QueryParams: operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.SynthesizeLongAudioRequest{
            AudioConfig: &shared.AudioConfig{
                AudioEncoding: "OGG_OPUS",
                EffectsProfileID: []string{
                    "voluptatum",
                },
                Pitch: 26.200001,
                SampleRateHertz: 161231572858529631,
                SpeakingRate: 50.099998,
                VolumeGainDb: 15.100000,
            },
            Input: &shared.SynthesisInput{
                Ssml: "totam",
                Text: "dolores",
            },
            OutputGcsURI: "illum",
            Voice: &shared.VoiceSelectionParams{
                CustomVoice: &shared.CustomVoiceParams{
                    Model: "debitis",
                    ReportedUsage: "REALTIME",
                },
                LanguageCode: "odio",
                Name: "dolore",
                SsmlGender: "SSML_VOICE_GENDER_UNSPECIFIED",
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