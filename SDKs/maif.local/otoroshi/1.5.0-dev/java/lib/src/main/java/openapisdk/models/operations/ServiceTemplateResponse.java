package openapisdk.models.operations;



public class ServiceTemplateResponse {
    public String contentType;
    public ServiceTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorTemplate errorTemplate;
    public ServiceTemplateResponse withErrorTemplate(openapisdk.models.shared.ErrorTemplate errorTemplate) {
        this.errorTemplate = errorTemplate;
        return this;
    }
    public Long statusCode;
    public ServiceTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}