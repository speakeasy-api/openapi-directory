package openapisdk.models.operations;



public class ServiceDeleteTargetRequest {
    public ServiceDeleteTargetPathParams pathParams;
    public ServiceDeleteTargetRequest withPathParams(ServiceDeleteTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServiceDeleteTargetSecurity security;
    public ServiceDeleteTargetRequest withSecurity(ServiceDeleteTargetSecurity security) {
        this.security = security;
        return this;
    }
}