package openapisdk.models.operations;



public class ListEvaluationRequest {
    public String serverURL;
    public ListEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEvaluationPathParams pathParams;
    public ListEvaluationRequest withPathParams(ListEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListEvaluationQueryParams queryParams;
    public ListEvaluationRequest withQueryParams(ListEvaluationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEvaluationSecurity security;
    public ListEvaluationRequest withSecurity(ListEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}