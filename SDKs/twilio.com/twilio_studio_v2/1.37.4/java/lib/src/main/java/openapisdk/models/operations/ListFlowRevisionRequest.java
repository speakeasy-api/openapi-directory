package openapisdk.models.operations;



public class ListFlowRevisionRequest {
    public String serverURL;
    public ListFlowRevisionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListFlowRevisionPathParams pathParams;
    public ListFlowRevisionRequest withPathParams(ListFlowRevisionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListFlowRevisionQueryParams queryParams;
    public ListFlowRevisionRequest withQueryParams(ListFlowRevisionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFlowRevisionSecurity security;
    public ListFlowRevisionRequest withSecurity(ListFlowRevisionSecurity security) {
        this.security = security;
        return this;
    }
}