package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseTemplateRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateLicenseTemplateRequestBody request;
    public CreateLicenseTemplateRequest withRequest(CreateLicenseTemplateRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateLicenseTemplateSecurity security;
    public CreateLicenseTemplateRequest withSecurity(CreateLicenseTemplateSecurity security) {
        this.security = security;
        return this;
    }
}