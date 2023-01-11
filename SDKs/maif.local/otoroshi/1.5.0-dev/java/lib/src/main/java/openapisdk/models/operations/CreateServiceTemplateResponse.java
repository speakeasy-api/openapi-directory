package openapisdk.models.operations;



public class CreateServiceTemplateResponse {
    public String contentType;
    public CreateServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorTemplate errorTemplate;
    public CreateServiceTemplateResponse withErrorTemplate(openapisdk.models.shared.ErrorTemplate errorTemplate) {
        this.errorTemplate = errorTemplate;
        return this;
    }
    public Long statusCode;
    public CreateServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}