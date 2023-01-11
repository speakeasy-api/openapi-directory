package openapisdk.models.operations;



public class TemplatesFetchResponse {
    public String contentType;
    public TemplatesFetchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TemplatesFetchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TemplateResponse templateResponse;
    public TemplatesFetchResponse withTemplateResponse(openapisdk.models.shared.TemplateResponse templateResponse) {
        this.templateResponse = templateResponse;
        return this;
    }
}