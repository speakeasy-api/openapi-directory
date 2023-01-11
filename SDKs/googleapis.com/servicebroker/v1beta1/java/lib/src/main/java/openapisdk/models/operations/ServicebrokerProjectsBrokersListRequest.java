package openapisdk.models.operations;



public class ServicebrokerProjectsBrokersListRequest {
    public ServicebrokerProjectsBrokersListPathParams pathParams;
    public ServicebrokerProjectsBrokersListRequest withPathParams(ServicebrokerProjectsBrokersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicebrokerProjectsBrokersListQueryParams queryParams;
    public ServicebrokerProjectsBrokersListRequest withQueryParams(ServicebrokerProjectsBrokersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ServicebrokerProjectsBrokersListSecurity security;
    public ServicebrokerProjectsBrokersListRequest withSecurity(ServicebrokerProjectsBrokersListSecurity security) {
        this.security = security;
        return this;
    }
}