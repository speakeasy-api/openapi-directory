package openapisdk.models.operations;



public class GetSetupV1CompaniesEmailTemplatesResponse {
    public String contentType;
    public GetSetupV1CompaniesEmailTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> emailTemplateListViewModel;
    public GetSetupV1CompaniesEmailTemplatesResponse withEmailTemplateListViewModel(java.util.Map<String, Object> emailTemplateListViewModel) {
        this.emailTemplateListViewModel = emailTemplateListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesEmailTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}