package openapisdk.models.operations;



public class TestnetGetAddressResponse {
    public String contentType;
    public TestnetGetAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetAddressResponse getAddressResponse;
    public TestnetGetAddressResponse withGetAddressResponse(openapisdk.models.shared.GetAddressResponse getAddressResponse) {
        this.getAddressResponse = getAddressResponse;
        return this;
    }
}