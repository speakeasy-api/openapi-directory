package openapisdk.models.operations;



public class ListCarrierPackageTypesResponse {
    public String contentType;
    public ListCarrierPackageTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListCarrierPackageTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListCarrierPackageTypesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListCarrierPackageTypesResponseBody listCarrierPackageTypesResponseBody;
    public ListCarrierPackageTypesResponse withListCarrierPackageTypesResponseBody(openapisdk.models.shared.ListCarrierPackageTypesResponseBody listCarrierPackageTypesResponseBody) {
        this.listCarrierPackageTypesResponseBody = listCarrierPackageTypesResponseBody;
        return this;
    }
}