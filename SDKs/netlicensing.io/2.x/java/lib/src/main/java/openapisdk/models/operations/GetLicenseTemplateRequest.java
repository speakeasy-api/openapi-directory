package openapisdk.models.operations;



public class GetLicenseTemplateRequest {
    public GetLicenseTemplatePathParams pathParams;
    public GetLicenseTemplateRequest withPathParams(GetLicenseTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLicenseTemplateSecurity security;
    public GetLicenseTemplateRequest withSecurity(GetLicenseTemplateSecurity security) {
        this.security = security;
        return this;
    }
}