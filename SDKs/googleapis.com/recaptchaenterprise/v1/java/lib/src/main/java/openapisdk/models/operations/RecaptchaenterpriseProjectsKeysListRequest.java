package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsKeysListRequest {
    public RecaptchaenterpriseProjectsKeysListPathParams pathParams;
    public RecaptchaenterpriseProjectsKeysListRequest withPathParams(RecaptchaenterpriseProjectsKeysListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysListQueryParams queryParams;
    public RecaptchaenterpriseProjectsKeysListRequest withQueryParams(RecaptchaenterpriseProjectsKeysListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public RecaptchaenterpriseProjectsKeysListSecurity security;
    public RecaptchaenterpriseProjectsKeysListRequest withSecurity(RecaptchaenterpriseProjectsKeysListSecurity security) {
        this.security = security;
        return this;
    }
}