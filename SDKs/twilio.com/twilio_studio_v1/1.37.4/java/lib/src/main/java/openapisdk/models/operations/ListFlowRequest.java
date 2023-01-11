package openapisdk.models.operations;



public class ListFlowRequest {
    public String serverURL;
    public ListFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFlowQueryParams queryParams;
    public ListFlowRequest withQueryParams(ListFlowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFlowSecurity security;
    public ListFlowRequest withSecurity(ListFlowSecurity security) {
        this.security = security;
        return this;
    }
}