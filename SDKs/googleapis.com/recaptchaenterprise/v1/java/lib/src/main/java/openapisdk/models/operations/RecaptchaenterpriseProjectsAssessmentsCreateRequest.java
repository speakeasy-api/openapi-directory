package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsAssessmentsCreateRequest {
    public RecaptchaenterpriseProjectsAssessmentsCreatePathParams pathParams;
    public RecaptchaenterpriseProjectsAssessmentsCreateRequest withPathParams(RecaptchaenterpriseProjectsAssessmentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecaptchaenterpriseProjectsAssessmentsCreateQueryParams queryParams;
    public RecaptchaenterpriseProjectsAssessmentsCreateRequest withQueryParams(RecaptchaenterpriseProjectsAssessmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1AssessmentInput request;
    public RecaptchaenterpriseProjectsAssessmentsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1AssessmentInput request) {
        this.request = request;
        return this;
    }
    public RecaptchaenterpriseProjectsAssessmentsCreateSecurity security;
    public RecaptchaenterpriseProjectsAssessmentsCreateRequest withSecurity(RecaptchaenterpriseProjectsAssessmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}