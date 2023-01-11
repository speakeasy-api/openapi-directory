package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysPatchRequest {
    public RecaptchaenterpriseProjectsKeysPatchPathParams pathParams;
    public RecaptchaenterpriseProjectsKeysPatchRequest withPathParams(RecaptchaenterpriseProjectsKeysPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysPatchQueryParams queryParams;
    public RecaptchaenterpriseProjectsKeysPatchRequest withQueryParams(RecaptchaenterpriseProjectsKeysPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key request;
    public RecaptchaenterpriseProjectsKeysPatchRequest withRequest(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key request) {
        this.request = request;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysPatchSecurity security;
    public RecaptchaenterpriseProjectsKeysPatchRequest withSecurity(RecaptchaenterpriseProjectsKeysPatchSecurity security) {
        this.security = security;
        return this;
    }
}