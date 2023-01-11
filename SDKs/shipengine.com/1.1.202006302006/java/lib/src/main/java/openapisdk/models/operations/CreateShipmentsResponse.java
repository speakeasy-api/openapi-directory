package openapisdk.models.operations;



public class CreateShipmentsResponse {
    public String contentType;
    public CreateShipmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateShipmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CreateShipmentsResponseBody createShipmentsResponseBody;
    public CreateShipmentsResponse withCreateShipmentsResponseBody(openapisdk.models.shared.CreateShipmentsResponseBody createShipmentsResponseBody) {
        this.createShipmentsResponseBody = createShipmentsResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public CreateShipmentsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}