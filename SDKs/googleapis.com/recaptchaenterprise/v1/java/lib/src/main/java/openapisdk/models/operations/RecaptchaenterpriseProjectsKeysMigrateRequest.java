package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysMigrateRequest {
    public RecaptchaenterpriseProjectsKeysMigratePathParams pathParams;
    public RecaptchaenterpriseProjectsKeysMigrateRequest withPathParams(RecaptchaenterpriseProjectsKeysMigratePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysMigrateQueryParams queryParams;
    public RecaptchaenterpriseProjectsKeysMigrateRequest withQueryParams(RecaptchaenterpriseProjectsKeysMigrateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest request;
    public RecaptchaenterpriseProjectsKeysMigrateRequest withRequest(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest request) {
        this.request = request;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysMigrateSecurity security;
    public RecaptchaenterpriseProjectsKeysMigrateRequest withSecurity(RecaptchaenterpriseProjectsKeysMigrateSecurity security) {
        this.security = security;
        return this;
    }
}