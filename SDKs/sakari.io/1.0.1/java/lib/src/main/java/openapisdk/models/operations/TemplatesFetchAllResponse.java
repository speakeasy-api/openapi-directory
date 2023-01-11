package openapisdk.models.operations;



public class TemplatesFetchAllResponse {
    public String contentType;
    public TemplatesFetchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public TemplatesFetchAllResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public TemplatesFetchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TemplatesResponse templatesResponse;
    public TemplatesFetchAllResponse withTemplatesResponse(openapisdk.models.shared.TemplatesResponse templatesResponse) {
        this.templatesResponse = templatesResponse;
        return this;
    }
}