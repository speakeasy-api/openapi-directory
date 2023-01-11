package openapisdk.models.operations;



public class ServiceGroupServicesRequest {
    public ServiceGroupServicesPathParams pathParams;
    public ServiceGroupServicesRequest withPathParams(ServiceGroupServicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServiceGroupServicesSecurity security;
    public ServiceGroupServicesRequest withSecurity(ServiceGroupServicesSecurity security) {
        this.security = security;
        return this;
    }
}