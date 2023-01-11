package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrustProductEvaluationRequest {
    public String serverURL;
    public CreateTrustProductEvaluationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateTrustProductEvaluationPathParams pathParams;
    public CreateTrustProductEvaluationRequest withPathParams(CreateTrustProductEvaluationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTrustProductEvaluationCreateTrustProductEvaluationRequest request;
    public CreateTrustProductEvaluationRequest withRequest(CreateTrustProductEvaluationCreateTrustProductEvaluationRequest request) {
        this.request = request;
        return this;
    }
    public CreateTrustProductEvaluationSecurity security;
    public CreateTrustProductEvaluationRequest withSecurity(CreateTrustProductEvaluationSecurity security) {
        this.security = security;
        return this;
    }
}