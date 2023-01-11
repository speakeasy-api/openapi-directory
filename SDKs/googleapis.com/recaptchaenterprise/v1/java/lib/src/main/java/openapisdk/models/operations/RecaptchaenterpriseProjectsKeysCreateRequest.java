package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysCreateRequest {
    public RecaptchaenterpriseProjectsKeysCreatePathParams pathParams;
    public RecaptchaenterpriseProjectsKeysCreateRequest withPathParams(RecaptchaenterpriseProjectsKeysCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysCreateQueryParams queryParams;
    public RecaptchaenterpriseProjectsKeysCreateRequest withQueryParams(RecaptchaenterpriseProjectsKeysCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key request;
    public RecaptchaenterpriseProjectsKeysCreateRequest withRequest(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key request) {
        this.request = request;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysCreateSecurity security;
    public RecaptchaenterpriseProjectsKeysCreateRequest withSecurity(RecaptchaenterpriseProjectsKeysCreateSecurity security) {
        this.security = security;
        return this;
    }
}