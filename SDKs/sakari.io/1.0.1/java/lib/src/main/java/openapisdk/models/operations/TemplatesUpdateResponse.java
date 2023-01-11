package openapisdk.models.operations;



public class TemplatesUpdateResponse {
    public String contentType;
    public TemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TemplateResponse templateResponse;
    public TemplatesUpdateResponse withTemplateResponse(openapisdk.models.shared.TemplateResponse templateResponse) {
        this.templateResponse = templateResponse;
        return this;
    }
}