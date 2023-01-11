package openapisdk.models.operations;



public class ListCarriersResponse {
    public String contentType;
    public ListCarriersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListCarriersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListCarriersResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.GetCarriersResponseBody getCarriersResponseBody;
    public ListCarriersResponse withGetCarriersResponseBody(openapisdk.models.shared.GetCarriersResponseBody getCarriersResponseBody) {
        this.getCarriersResponseBody = getCarriersResponseBody;
        return this;
    }
}