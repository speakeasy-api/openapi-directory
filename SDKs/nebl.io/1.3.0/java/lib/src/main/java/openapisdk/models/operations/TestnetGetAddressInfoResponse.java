package openapisdk.models.operations;



public class TestnetGetAddressInfoResponse {
    public String contentType;
    public TestnetGetAddressInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TestnetGetAddressInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public TestnetGetAddressInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetAddressInfoResponse getAddressInfoResponse;
    public TestnetGetAddressInfoResponse withGetAddressInfoResponse(openapisdk.models.shared.GetAddressInfoResponse getAddressInfoResponse) {
        this.getAddressInfoResponse = getAddressInfoResponse;
        return this;
    }
}