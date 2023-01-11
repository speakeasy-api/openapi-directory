package openapisdk.models.operations;



public class GetManifestByIdResponse {
    public String contentType;
    public GetManifestByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetManifestByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetManifestByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetManifestByIdResponseBody getManifestByIdResponseBody;
    public GetManifestByIdResponse withGetManifestByIdResponseBody(openapisdk.models.shared.GetManifestByIdResponseBody getManifestByIdResponseBody) {
        this.getManifestByIdResponseBody = getManifestByIdResponseBody;
        return this;
    }
}