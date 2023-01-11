package openapisdk.models.operations;



public class CreatePackageTypeResponse {
    public String contentType;
    public CreatePackageTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePackageTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreatePackageTypeResponseBody createPackageTypeResponseBody;
    public CreatePackageTypeResponse withCreatePackageTypeResponseBody(openapisdk.models.shared.CreatePackageTypeResponseBody createPackageTypeResponseBody) {
        this.createPackageTypeResponseBody = createPackageTypeResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreatePackageTypeResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}