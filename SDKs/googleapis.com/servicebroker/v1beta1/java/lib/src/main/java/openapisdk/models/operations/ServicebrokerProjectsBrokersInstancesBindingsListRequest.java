package openapisdk.models.operations;



public class ServicebrokerProjectsBrokersInstancesBindingsListRequest {
    public ServicebrokerProjectsBrokersInstancesBindingsListPathParams pathParams;
    public ServicebrokerProjectsBrokersInstancesBindingsListRequest withPathParams(ServicebrokerProjectsBrokersInstancesBindingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerProjectsBrokersInstancesBindingsListQueryParams queryParams;
    public ServicebrokerProjectsBrokersInstancesBindingsListRequest withQueryParams(ServicebrokerProjectsBrokersInstancesBindingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ServicebrokerProjectsBrokersInstancesBindingsListSecurity security;
    public ServicebrokerProjectsBrokersInstancesBindingsListRequest withSecurity(ServicebrokerProjectsBrokersInstancesBindingsListSecurity security) {
        this.security = security;
        return this;
    }
}