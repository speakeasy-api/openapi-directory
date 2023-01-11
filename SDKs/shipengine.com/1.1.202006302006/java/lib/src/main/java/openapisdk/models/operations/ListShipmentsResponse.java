package openapisdk.models.operations;



public class ListShipmentsResponse {
    public String contentType;
    public ListShipmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListShipmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListShipmentsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListShipmentsResponseBody listShipmentsResponseBody;
    public ListShipmentsResponse withListShipmentsResponseBody(openapisdk.models.shared.ListShipmentsResponseBody listShipmentsResponseBody) {
        this.listShipmentsResponseBody = listShipmentsResponseBody;
        return this;
    }
}