package openapisdk.models.operations;



public class ListManifestsResponse {
    public String contentType;
    public ListManifestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListManifestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListManifestsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListManifestsResponseBody listManifestsResponseBody;
    public ListManifestsResponse withListManifestsResponseBody(openapisdk.models.shared.ListManifestsResponseBody listManifestsResponseBody) {
        this.listManifestsResponseBody = listManifestsResponseBody;
        return this;
    }
}