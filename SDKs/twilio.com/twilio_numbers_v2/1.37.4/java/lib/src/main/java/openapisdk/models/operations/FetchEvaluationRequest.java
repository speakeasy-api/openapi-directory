package openapisdk.models.operations;



public class FetchEvaluationRequest {
    public String serverURL;
    public FetchEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEvaluationPathParams pathParams;
    public FetchEvaluationRequest withPathParams(FetchEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEvaluationSecurity security;
    public FetchEvaluationRequest withSecurity(FetchEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}