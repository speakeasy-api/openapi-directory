package openapisdk.models.operations;



public class ListBindingRequest {
    public String serverURL;
    public ListBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListBindingPathParams pathParams;
    public ListBindingRequest withPathParams(ListBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBindingQueryParams queryParams;
    public ListBindingRequest withQueryParams(ListBindingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBindingSecurity security;
    public ListBindingRequest withSecurity(ListBindingSecurity security) {
        this.security = security;
        return this;
    }
}