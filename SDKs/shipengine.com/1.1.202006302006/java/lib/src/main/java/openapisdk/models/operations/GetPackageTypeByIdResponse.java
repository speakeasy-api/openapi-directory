package openapisdk.models.operations;



public class GetPackageTypeByIdResponse {
    public String contentType;
    public GetPackageTypeByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPackageTypeByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetPackageTypeByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetPackageTypeByIdResponseBody getPackageTypeByIdResponseBody;
    public GetPackageTypeByIdResponse withGetPackageTypeByIdResponseBody(openapisdk.models.shared.GetPackageTypeByIdResponseBody getPackageTypeByIdResponseBody) {
        this.getPackageTypeByIdResponseBody = getPackageTypeByIdResponseBody;
        return this;
    }
}