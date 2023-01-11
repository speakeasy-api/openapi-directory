package openapisdk.models.operations;



public class ConnectInsurerResponse {
    public String contentType;
    public ConnectInsurerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConnectInsurerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> connectInsurerResponseBody;
    public ConnectInsurerResponse withConnectInsurerResponseBody(java.util.Map<String, Object> connectInsurerResponseBody) {
        this.connectInsurerResponseBody = connectInsurerResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ConnectInsurerResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}