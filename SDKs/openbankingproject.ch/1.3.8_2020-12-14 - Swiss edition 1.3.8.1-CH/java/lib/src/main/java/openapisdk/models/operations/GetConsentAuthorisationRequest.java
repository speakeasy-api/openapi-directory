package openapisdk.models.operations;



public class GetConsentAuthorisationRequest {
    public GetConsentAuthorisationPathParams pathParams;
    public GetConsentAuthorisationRequest withPathParams(GetConsentAuthorisationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConsentAuthorisationHeaders headers;
    public GetConsentAuthorisationRequest withHeaders(GetConsentAuthorisationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetConsentAuthorisationSecurity security;
    public GetConsentAuthorisationRequest withSecurity(GetConsentAuthorisationSecurity security) {
        this.security = security;
        return this;
    }
}