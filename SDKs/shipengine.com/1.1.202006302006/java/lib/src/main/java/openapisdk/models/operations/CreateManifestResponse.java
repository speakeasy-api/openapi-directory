package openapisdk.models.operations;



public class CreateManifestResponse {
    public String contentType;
    public CreateManifestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateManifestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateManifestResponseBody createManifestResponseBody;
    public CreateManifestResponse withCreateManifestResponseBody(openapisdk.models.shared.CreateManifestResponseBody createManifestResponseBody) {
        this.createManifestResponseBody = createManifestResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateManifestResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}