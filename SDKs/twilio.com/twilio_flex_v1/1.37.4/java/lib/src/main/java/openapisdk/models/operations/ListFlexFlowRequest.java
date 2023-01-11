package openapisdk.models.operations;



public class ListFlexFlowRequest {
    public String serverURL;
    public ListFlexFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFlexFlowQueryParams queryParams;
    public ListFlexFlowRequest withQueryParams(ListFlexFlowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFlexFlowSecurity security;
    public ListFlexFlowRequest withSecurity(ListFlexFlowSecurity security) {
        this.security = security;
        return this;
    }
}