package openapisdk.models.operations;



public class CreateEvaluationRequest {
    public String serverURL;
    public CreateEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateEvaluationPathParams pathParams;
    public CreateEvaluationRequest withPathParams(CreateEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateEvaluationSecurity security;
    public CreateEvaluationRequest withSecurity(CreateEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}