package openapisdk.models.operations;



public class ListTrustProductEvaluationRequest {
    public String serverURL;
    public ListTrustProductEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTrustProductEvaluationPathParams pathParams;
    public ListTrustProductEvaluationRequest withPathParams(ListTrustProductEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTrustProductEvaluationQueryParams queryParams;
    public ListTrustProductEvaluationRequest withQueryParams(ListTrustProductEvaluationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTrustProductEvaluationSecurity security;
    public ListTrustProductEvaluationRequest withSecurity(ListTrustProductEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}