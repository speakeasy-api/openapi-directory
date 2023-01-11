package openapisdk.models.operations;



public class TestnetGetAddressUtxosResponse {
    public String contentType;
    public TestnetGetAddressUtxosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetAddressUtxosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetAddressUtxosResponse[] getAddressUtxosResponse;
    public TestnetGetAddressUtxosResponse withGetAddressUtxosResponse(openapisdk.models.shared.GetAddressUtxosResponse[] getAddressUtxosResponse) {
        this.getAddressUtxosResponse = getAddressUtxosResponse;
        return this;
    }
}