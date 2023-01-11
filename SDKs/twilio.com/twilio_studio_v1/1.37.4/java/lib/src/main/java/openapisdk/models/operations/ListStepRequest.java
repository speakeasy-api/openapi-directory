package openapisdk.models.operations;



public class ListStepRequest {
    public String serverURL;
    public ListStepRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListStepPathParams pathParams;
    public ListStepRequest withPathParams(ListStepPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListStepQueryParams queryParams;
    public ListStepRequest withQueryParams(ListStepQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStepSecurity security;
    public ListStepRequest withSecurity(ListStepSecurity security) {
        this.security = security;
        return this;
    }
}