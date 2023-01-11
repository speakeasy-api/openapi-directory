package openapisdk.models.operations;



public class GetAddressInfoResponse {
    public String contentType;
    public GetAddressInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAddressInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetAddressInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetAddressInfoResponse getAddressInfoResponse;
    public GetAddressInfoResponse withGetAddressInfoResponse(openapisdk.models.shared.GetAddressInfoResponse getAddressInfoResponse) {
        this.getAddressInfoResponse = getAddressInfoResponse;
        return this;
    }
}