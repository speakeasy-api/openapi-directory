package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsPhraseSetsCreateRequest {
    public SpeechProjectsLocationsPhraseSetsCreatePathParams pathParams;
    public SpeechProjectsLocationsPhraseSetsCreateRequest withPathParams(SpeechProjectsLocationsPhraseSetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsCreateQueryParams queryParams;
    public SpeechProjectsLocationsPhraseSetsCreateRequest withQueryParams(SpeechProjectsLocationsPhraseSetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePhraseSetRequest request;
    public SpeechProjectsLocationsPhraseSetsCreateRequest withRequest(openapisdk.models.shared.CreatePhraseSetRequest request) {
        this.request = request;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsCreateSecurity security;
    public SpeechProjectsLocationsPhraseSetsCreateRequest withSecurity(SpeechProjectsLocationsPhraseSetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}