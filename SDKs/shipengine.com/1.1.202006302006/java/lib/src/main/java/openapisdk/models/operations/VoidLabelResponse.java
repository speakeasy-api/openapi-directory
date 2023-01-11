package openapisdk.models.operations;



public class VoidLabelResponse {
    public String contentType;
    public VoidLabelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VoidLabelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public VoidLabelResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.VoidLabelResponseBody voidLabelResponseBody;
    public VoidLabelResponse withVoidLabelResponseBody(openapisdk.models.shared.VoidLabelResponseBody voidLabelResponseBody) {
        this.voidLabelResponseBody = voidLabelResponseBody;
        return this;
    }
}