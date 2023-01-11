package openapisdk.models.operations;



public class ListWorkflowRequest {
    public String serverURL;
    public ListWorkflowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWorkflowPathParams pathParams;
    public ListWorkflowRequest withPathParams(ListWorkflowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListWorkflowQueryParams queryParams;
    public ListWorkflowRequest withQueryParams(ListWorkflowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkflowSecurity security;
    public ListWorkflowRequest withSecurity(ListWorkflowSecurity security) {
        this.security = security;
        return this;
    }
}