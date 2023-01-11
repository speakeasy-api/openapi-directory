package openapisdk.models.operations;



public class ListLabelsResponse {
    public String contentType;
    public ListLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListLabelsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public java.util.Map<String, Object> listLabelsResponseBody;
    public ListLabelsResponse withListLabelsResponseBody(java.util.Map<String, Object> listLabelsResponseBody) {
        this.listLabelsResponseBody = listLabelsResponseBody;
        return this;
    }
}