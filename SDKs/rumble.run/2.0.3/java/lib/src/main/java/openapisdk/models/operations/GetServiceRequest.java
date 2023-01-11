package openapisdk.models.operations;



public class GetServiceRequest {
    public GetServicePathParams pathParams;
    public GetServiceRequest withPathParams(GetServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetServiceSecurity security;
    public GetServiceRequest withSecurity(GetServiceSecurity security) {
        this.security = security;
        return this;
    }
}