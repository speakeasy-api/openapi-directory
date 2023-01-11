package openapisdk.models.operations;



public class GetSetupV1LocationsIdEmailTemplatesResponse {
    public String contentType;
    public GetSetupV1LocationsIdEmailTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> emailTemplateListViewModel;
    public GetSetupV1LocationsIdEmailTemplatesResponse withEmailTemplateListViewModel(java.util.Map<String, Object> emailTemplateListViewModel) {
        this.emailTemplateListViewModel = emailTemplateListViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1LocationsIdEmailTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}