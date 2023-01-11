package openapisdk.models.operations;



public class TemplatesCreateResponse {
    public String contentType;
    public TemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TemplatesResponse templatesResponse;
    public TemplatesCreateResponse withTemplatesResponse(openapisdk.models.shared.TemplatesResponse templatesResponse) {
        this.templatesResponse = templatesResponse;
        return this;
    }
}