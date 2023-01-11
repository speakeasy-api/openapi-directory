package openapisdk.models.operations;



public class ListTaskRequest {
    public String serverURL;
    public ListTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTaskPathParams pathParams;
    public ListTaskRequest withPathParams(ListTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTaskQueryParams queryParams;
    public ListTaskRequest withQueryParams(ListTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskSecurity security;
    public ListTaskRequest withSecurity(ListTaskSecurity security) {
        this.security = security;
        return this;
    }
}