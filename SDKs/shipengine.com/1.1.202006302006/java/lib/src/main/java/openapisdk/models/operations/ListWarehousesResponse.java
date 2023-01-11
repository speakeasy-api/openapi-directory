package openapisdk.models.operations;



public class ListWarehousesResponse {
    public String contentType;
    public ListWarehousesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListWarehousesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListWarehousesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListWarehousesResponseBody listWarehousesResponseBody;
    public ListWarehousesResponse withListWarehousesResponseBody(openapisdk.models.shared.ListWarehousesResponseBody listWarehousesResponseBody) {
        this.listWarehousesResponseBody = listWarehousesResponseBody;
        return this;
    }
}