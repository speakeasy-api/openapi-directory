package openapisdk.models.operations;



public class DisconnectInsurerResponse {
    public String contentType;
    public DisconnectInsurerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisconnectInsurerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> disconnectInsurerResponseBody;
    public DisconnectInsurerResponse withDisconnectInsurerResponseBody(java.util.Map<String, Object> disconnectInsurerResponseBody) {
        this.disconnectInsurerResponseBody = disconnectInsurerResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public DisconnectInsurerResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}