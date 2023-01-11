package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomerProfileEvaluationRequest {
    public String serverURL;
    public CreateCustomerProfileEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateCustomerProfileEvaluationPathParams pathParams;
    public CreateCustomerProfileEvaluationRequest withPathParams(CreateCustomerProfileEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest request;
    public CreateCustomerProfileEvaluationRequest withRequest(CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest request) {
        this.request = request;
        return this;
    }
    public CreateCustomerProfileEvaluationSecurity security;
    public CreateCustomerProfileEvaluationRequest withSecurity(CreateCustomerProfileEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}