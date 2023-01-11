package openapisdk.models.operations;



public class GetConsentScaStatusRequest {
    public GetConsentScaStatusPathParams pathParams;
    public GetConsentScaStatusRequest withPathParams(GetConsentScaStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConsentScaStatusHeaders headers;
    public GetConsentScaStatusRequest withHeaders(GetConsentScaStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetConsentScaStatusSecurity security;
    public GetConsentScaStatusRequest withSecurity(GetConsentScaStatusSecurity security) {
        this.security = security;
        return this;
    }
}