package openapisdk.models.operations;



public class CreateTagResponse {
    public String contentType;
    public CreateTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateTagResponseBody createTagResponseBody;
    public CreateTagResponse withCreateTagResponseBody(openapisdk.models.shared.CreateTagResponseBody createTagResponseBody) {
        this.createTagResponseBody = createTagResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateTagResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}