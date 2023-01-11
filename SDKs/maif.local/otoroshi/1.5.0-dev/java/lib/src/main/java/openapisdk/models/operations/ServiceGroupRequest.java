package openapisdk.models.operations;



public class ServiceGroupRequest {
    public ServiceGroupPathParams pathParams;
    public ServiceGroupRequest withPathParams(ServiceGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServiceGroupSecurity security;
    public ServiceGroupRequest withSecurity(ServiceGroupSecurity security) {
        this.security = security;
        return this;
    }
}