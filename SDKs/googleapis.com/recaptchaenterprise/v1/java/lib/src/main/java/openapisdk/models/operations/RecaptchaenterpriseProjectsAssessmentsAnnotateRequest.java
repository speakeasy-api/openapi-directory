package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsAssessmentsAnnotateRequest {
    public RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams pathParams;
    public RecaptchaenterpriseProjectsAssessmentsAnnotateRequest withPathParams(RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams queryParams;
    public RecaptchaenterpriseProjectsAssessmentsAnnotateRequest withQueryParams(RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest request;
    public RecaptchaenterpriseProjectsAssessmentsAnnotateRequest withRequest(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest request) {
        this.request = request;
        return this;
    }
    public RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity security;
    public RecaptchaenterpriseProjectsAssessmentsAnnotateRequest withSecurity(RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity security) {
        this.security = security;
        return this;
    }
}