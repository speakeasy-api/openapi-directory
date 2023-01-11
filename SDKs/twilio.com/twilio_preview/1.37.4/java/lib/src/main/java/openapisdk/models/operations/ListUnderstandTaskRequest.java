package openapisdk.models.operations;



public class ListUnderstandTaskRequest {
    public String serverURL;
    public ListUnderstandTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListUnderstandTaskPathParams pathParams;
    public ListUnderstandTaskRequest withPathParams(ListUnderstandTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListUnderstandTaskQueryParams queryParams;
    public ListUnderstandTaskRequest withQueryParams(ListUnderstandTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUnderstandTaskSecurity security;
    public ListUnderstandTaskRequest withSecurity(ListUnderstandTaskSecurity security) {
        this.security = security;
        return this;
    }
}