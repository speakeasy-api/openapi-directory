package openapisdk.models.operations;



public class GetRawTxResponse {
    public String contentType;
    public GetRawTxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRawTxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetRawTxResponse getRawTxResponse;
    public GetRawTxResponse withGetRawTxResponse(openapisdk.models.shared.GetRawTxResponse getRawTxResponse) {
        this.getRawTxResponse = getRawTxResponse;
        return this;
    }
}