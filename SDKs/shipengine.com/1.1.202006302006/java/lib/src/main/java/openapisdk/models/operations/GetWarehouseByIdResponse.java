package openapisdk.models.operations;



public class GetWarehouseByIdResponse {
    public String contentType;
    public GetWarehouseByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWarehouseByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public GetWarehouseByIdResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetWarehouseByIdResponseBody getWarehouseByIdResponseBody;
    public GetWarehouseByIdResponse withGetWarehouseByIdResponseBody(openapisdk.models.shared.GetWarehouseByIdResponseBody getWarehouseByIdResponseBody) {
        this.getWarehouseByIdResponseBody = getWarehouseByIdResponseBody;
        return this;
    }
}