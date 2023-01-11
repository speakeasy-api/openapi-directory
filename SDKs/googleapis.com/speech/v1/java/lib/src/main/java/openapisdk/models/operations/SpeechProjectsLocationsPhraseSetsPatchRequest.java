package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SpeechProjectsLocationsPhraseSetsPatchRequest {
    public SpeechProjectsLocationsPhraseSetsPatchPathParams pathParams;
    public SpeechProjectsLocationsPhraseSetsPatchRequest withPathParams(SpeechProjectsLocationsPhraseSetsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsPatchQueryParams queryParams;
    public SpeechProjectsLocationsPhraseSetsPatchRequest withQueryParams(SpeechProjectsLocationsPhraseSetsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PhraseSet request;
    public SpeechProjectsLocationsPhraseSetsPatchRequest withRequest(openapisdk.models.shared.PhraseSet request) {
        this.request = request;
        return this;
    }
    public SpeechProjectsLocationsPhraseSetsPatchSecurity security;
    public SpeechProjectsLocationsPhraseSetsPatchRequest withSecurity(SpeechProjectsLocationsPhraseSetsPatchSecurity security) {
        this.security = security;
        return this;
    }
}