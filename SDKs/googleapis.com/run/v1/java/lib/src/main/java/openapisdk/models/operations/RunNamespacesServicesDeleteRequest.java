package openapisdk.models.operations;



public class RunNamespacesServicesDeleteRequest {
    public RunNamespacesServicesDeletePathParams pathParams;
    public RunNamespacesServicesDeleteRequest withPathParams(RunNamespacesServicesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesServicesDeleteQueryParams queryParams;
    public RunNamespacesServicesDeleteRequest withQueryParams(RunNamespacesServicesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesServicesDeleteSecurity security;
    public RunNamespacesServicesDeleteRequest withSecurity(RunNamespacesServicesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}