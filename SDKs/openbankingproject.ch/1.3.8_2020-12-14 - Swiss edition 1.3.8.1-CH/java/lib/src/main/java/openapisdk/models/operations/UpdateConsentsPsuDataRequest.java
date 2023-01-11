package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConsentsPsuDataRequest {
    public UpdateConsentsPsuDataPathParams pathParams;
    public UpdateConsentsPsuDataRequest withPathParams(UpdateConsentsPsuDataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateConsentsPsuDataHeaders headers;
    public UpdateConsentsPsuDataRequest withHeaders(UpdateConsentsPsuDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateConsentsPsuDataRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public UpdateConsentsPsuDataSecurity security;
    public UpdateConsentsPsuDataRequest withSecurity(UpdateConsentsPsuDataSecurity security) {
        this.security = security;
        return this;
    }
}