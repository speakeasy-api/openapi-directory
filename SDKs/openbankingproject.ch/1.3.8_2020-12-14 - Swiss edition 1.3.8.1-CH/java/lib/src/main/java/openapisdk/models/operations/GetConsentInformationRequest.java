package openapisdk.models.operations;



public class GetConsentInformationRequest {
    public GetConsentInformationPathParams pathParams;
    public GetConsentInformationRequest withPathParams(GetConsentInformationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConsentInformationHeaders headers;
    public GetConsentInformationRequest withHeaders(GetConsentInformationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetConsentInformationSecurity security;
    public GetConsentInformationRequest withSecurity(GetConsentInformationSecurity security) {
        this.security = security;
        return this;
    }
}