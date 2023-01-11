package openapisdk.models.operations;



public class OneCertRequest {
    public OneCertPathParams pathParams;
    public OneCertRequest withPathParams(OneCertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OneCertSecurity security;
    public OneCertRequest withSecurity(OneCertSecurity security) {
        this.security = security;
        return this;
    }
}