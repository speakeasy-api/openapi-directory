<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest(
    security=operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams(
        parent="earum",
    ),
    query_params=operations.TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="media",
        callback="ut",
        fields="porro",
        key="quo",
        oauth_token="sed",
        pretty_print=True,
        quota_user="quos",
        upload_type="atque",
        upload_protocol="hic",
    ),
    request=shared.SynthesizeLongAudioRequest(
        audio_config=shared.AudioConfig(
            audio_encoding="MULAW",
            effects_profile_id=[
                "tenetur",
            ],
            pitch=56.099998,
            sample_rate_hertz=7501805396362690206,
            speaking_rate=17.200001,
            volume_gain_db=96.199997,
        ),
        input=shared.SynthesisInput(
            ssml="error",
            text="quaerat",
        ),
        output_gcs_uri="et",
        voice=shared.VoiceSelectionParams(
            custom_voice=shared.CustomVoiceParams(
                model="aut",
                reported_usage="OFFLINE",
            ),
            language_code="pariatur",
            name="magni",
            ssml_gender="NEUTRAL",
        ),
    ),
)
    
res = s.projects.texttospeech_projects_locations_voices_synthesize_long_audio(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->