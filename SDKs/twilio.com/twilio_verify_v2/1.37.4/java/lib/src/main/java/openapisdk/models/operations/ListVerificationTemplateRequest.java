package openapisdk.models.operations;



public class ListVerificationTemplateRequest {
    public String serverURL;
    public ListVerificationTemplateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListVerificationTemplateQueryParams queryParams;
    public ListVerificationTemplateRequest withQueryParams(ListVerificationTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVerificationTemplateSecurity security;
    public ListVerificationTemplateRequest withSecurity(ListVerificationTemplateSecurity security) {
        this.security = security;
        return this;
    }
}