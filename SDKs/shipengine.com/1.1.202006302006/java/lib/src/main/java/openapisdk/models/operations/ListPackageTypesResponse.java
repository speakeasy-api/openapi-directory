package openapisdk.models.operations;



public class ListPackageTypesResponse {
    public String contentType;
    public ListPackageTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPackageTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListPackageTypesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListPackageTypesResponseBody listPackageTypesResponseBody;
    public ListPackageTypesResponse withListPackageTypesResponseBody(openapisdk.models.shared.ListPackageTypesResponseBody listPackageTypesResponseBody) {
        this.listPackageTypesResponseBody = listPackageTypesResponseBody;
        return this;
    }
}