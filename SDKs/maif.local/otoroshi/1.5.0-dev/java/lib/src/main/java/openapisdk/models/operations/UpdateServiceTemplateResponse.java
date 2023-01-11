package openapisdk.models.operations;



public class UpdateServiceTemplateResponse {
    public String contentType;
    public UpdateServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorTemplate errorTemplate;
    public UpdateServiceTemplateResponse withErrorTemplate(openapisdk.models.shared.ErrorTemplate errorTemplate) {
        this.errorTemplate = errorTemplate;
        return this;
    }
    public Long statusCode;
    public UpdateServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}