package openapisdk.models.operations;



public class TestnetGetRawTxResponse {
    public String contentType;
    public TestnetGetRawTxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetRawTxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetRawTxResponse getRawTxResponse;
    public TestnetGetRawTxResponse withGetRawTxResponse(openapisdk.models.shared.GetRawTxResponse getRawTxResponse) {
        this.getRawTxResponse = getRawTxResponse;
        return this;
    }
}