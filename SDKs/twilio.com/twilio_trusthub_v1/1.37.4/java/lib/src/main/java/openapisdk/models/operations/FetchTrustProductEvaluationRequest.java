package openapisdk.models.operations;



public class FetchTrustProductEvaluationRequest {
    public String serverURL;
    public FetchTrustProductEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrustProductEvaluationPathParams pathParams;
    public FetchTrustProductEvaluationRequest withPathParams(FetchTrustProductEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrustProductEvaluationSecurity security;
    public FetchTrustProductEvaluationRequest withSecurity(FetchTrustProductEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}