package openapisdk.models.operations;



public class ConnectCarrierResponse {
    public String contentType;
    public ConnectCarrierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConnectCarrierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConnectCarrierResponseBody connectCarrierResponseBody;
    public ConnectCarrierResponse withConnectCarrierResponseBody(openapisdk.models.shared.ConnectCarrierResponseBody connectCarrierResponseBody) {
        this.connectCarrierResponseBody = connectCarrierResponseBody;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ConnectCarrierResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
}