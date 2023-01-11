package openapisdk.models.operations;



public class ListVerificationTemplateResponse {
    public String contentType;
    public ListVerificationTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListVerificationTemplateListVerificationTemplateResponse listVerificationTemplateResponse;
    public ListVerificationTemplateResponse withListVerificationTemplateResponse(ListVerificationTemplateListVerificationTemplateResponse listVerificationTemplateResponse) {
        this.listVerificationTemplateResponse = listVerificationTemplateResponse;
        return this;
    }
    public Long statusCode;
    public ListVerificationTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}