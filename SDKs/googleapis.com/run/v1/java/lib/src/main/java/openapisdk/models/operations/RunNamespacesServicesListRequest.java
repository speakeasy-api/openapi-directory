package openapisdk.models.operations;



public class RunNamespacesServicesListRequest {
    public RunNamespacesServicesListPathParams pathParams;
    public RunNamespacesServicesListRequest withPathParams(RunNamespacesServicesListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunNamespacesServicesListQueryParams queryParams;
    public RunNamespacesServicesListRequest withQueryParams(RunNamespacesServicesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RunNamespacesServicesListSecurity security;
    public RunNamespacesServicesListRequest withSecurity(RunNamespacesServicesListSecurity security) {
        this.security = security;
        return this;
    }
}