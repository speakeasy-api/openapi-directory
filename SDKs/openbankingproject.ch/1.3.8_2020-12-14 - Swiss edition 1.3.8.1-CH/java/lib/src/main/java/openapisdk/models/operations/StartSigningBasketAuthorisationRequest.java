package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSigningBasketAuthorisationRequest {
    public StartSigningBasketAuthorisationPathParams pathParams;
    public StartSigningBasketAuthorisationRequest withPathParams(StartSigningBasketAuthorisationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StartSigningBasketAuthorisationHeaders headers;
    public StartSigningBasketAuthorisationRequest withHeaders(StartSigningBasketAuthorisationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public StartSigningBasketAuthorisationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public StartSigningBasketAuthorisationSecurity security;
    public StartSigningBasketAuthorisationRequest withSecurity(StartSigningBasketAuthorisationSecurity security) {
        this.security = security;
        return this;
    }
}