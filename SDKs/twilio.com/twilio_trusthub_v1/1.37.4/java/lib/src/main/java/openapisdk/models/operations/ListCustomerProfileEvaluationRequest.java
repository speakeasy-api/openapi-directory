package openapisdk.models.operations;



public class ListCustomerProfileEvaluationRequest {
    public String serverURL;
    public ListCustomerProfileEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCustomerProfileEvaluationPathParams pathParams;
    public ListCustomerProfileEvaluationRequest withPathParams(ListCustomerProfileEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListCustomerProfileEvaluationQueryParams queryParams;
    public ListCustomerProfileEvaluationRequest withQueryParams(ListCustomerProfileEvaluationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCustomerProfileEvaluationSecurity security;
    public ListCustomerProfileEvaluationRequest withSecurity(ListCustomerProfileEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}