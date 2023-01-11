package openapisdk.models.operations;



public class ServiceTargetsRequest {
    public ServiceTargetsPathParams pathParams;
    public ServiceTargetsRequest withPathParams(ServiceTargetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServiceTargetsSecurity security;
    public ServiceTargetsRequest withSecurity(ServiceTargetsSecurity security) {
        this.security = security;
        return this;
    }
}