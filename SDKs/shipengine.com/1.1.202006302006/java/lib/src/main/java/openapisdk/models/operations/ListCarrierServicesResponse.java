package openapisdk.models.operations;



public class ListCarrierServicesResponse {
    public String contentType;
    public ListCarrierServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListCarrierServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListCarrierServicesResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListCarrierServicesResponseBody listCarrierServicesResponseBody;
    public ListCarrierServicesResponse withListCarrierServicesResponseBody(openapisdk.models.shared.ListCarrierServicesResponseBody listCarrierServicesResponseBody) {
        this.listCarrierServicesResponseBody = listCarrierServicesResponseBody;
        return this;
    }
}