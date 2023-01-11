package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartConsentAuthorisationRequest {
    public StartConsentAuthorisationPathParams pathParams;
    public StartConsentAuthorisationRequest withPathParams(StartConsentAuthorisationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartConsentAuthorisationHeaders headers;
    public StartConsentAuthorisationRequest withHeaders(StartConsentAuthorisationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StartConsentAuthorisationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public StartConsentAuthorisationSecurity security;
    public StartConsentAuthorisationRequest withSecurity(StartConsentAuthorisationSecurity security) {
        this.security = security;
        return this;
    }
}