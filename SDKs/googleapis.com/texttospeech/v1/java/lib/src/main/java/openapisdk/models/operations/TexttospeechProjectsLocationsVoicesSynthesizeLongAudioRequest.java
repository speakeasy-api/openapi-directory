package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest {
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams pathParams;
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest withPathParams(TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams queryParams;
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest withQueryParams(TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SynthesizeLongAudioRequest request;
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest withRequest(openapisdk.models.shared.SynthesizeLongAudioRequest request) {
        this.request = request;
        return this;
    }
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioSecurity security;
    public TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest withSecurity(TexttospeechProjectsLocationsVoicesSynthesizeLongAudioSecurity security) {
        this.security = security;
        return this;
    }
}