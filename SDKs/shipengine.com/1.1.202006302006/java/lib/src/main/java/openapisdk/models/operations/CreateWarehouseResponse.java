package openapisdk.models.operations;



public class CreateWarehouseResponse {
    public String contentType;
    public CreateWarehouseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateWarehouseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateWarehouseResponseBody createWarehouseResponseBody;
    public CreateWarehouseResponse withCreateWarehouseResponseBody(openapisdk.models.shared.CreateWarehouseResponseBody createWarehouseResponseBody) {
        this.createWarehouseResponseBody = createWarehouseResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateWarehouseResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}