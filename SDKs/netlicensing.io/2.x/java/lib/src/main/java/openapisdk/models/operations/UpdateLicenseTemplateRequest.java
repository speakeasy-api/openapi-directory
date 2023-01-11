package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseTemplateRequest {
    public UpdateLicenseTemplatePathParams pathParams;
    public UpdateLicenseTemplateRequest withPathParams(UpdateLicenseTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateLicenseTemplateRequestBody request;
    public UpdateLicenseTemplateRequest withRequest(UpdateLicenseTemplateRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateLicenseTemplateSecurity security;
    public UpdateLicenseTemplateRequest withSecurity(UpdateLicenseTemplateSecurity security) {
        this.security = security;
        return this;
    }
}