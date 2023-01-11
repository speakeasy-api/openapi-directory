package openapisdk.models.operations;



public class FetchCustomerProfileEvaluationRequest {
    public String serverURL;
    public FetchCustomerProfileEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCustomerProfileEvaluationPathParams pathParams;
    public FetchCustomerProfileEvaluationRequest withPathParams(FetchCustomerProfileEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchCustomerProfileEvaluationSecurity security;
    public FetchCustomerProfileEvaluationRequest withSecurity(FetchCustomerProfileEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}