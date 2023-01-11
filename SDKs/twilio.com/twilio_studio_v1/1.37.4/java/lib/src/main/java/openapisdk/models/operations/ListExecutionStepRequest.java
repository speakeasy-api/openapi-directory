package openapisdk.models.operations;



public class ListExecutionStepRequest {
    public String serverURL;
    public ListExecutionStepRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListExecutionStepPathParams pathParams;
    public ListExecutionStepRequest withPathParams(ListExecutionStepPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListExecutionStepQueryParams queryParams;
    public ListExecutionStepRequest withQueryParams(ListExecutionStepQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExecutionStepSecurity security;
    public ListExecutionStepRequest withSecurity(ListExecutionStepSecurity security) {
        this.security = security;
        return this;
    }
}