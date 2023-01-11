package openapisdk.models.operations;



public class GetTxResponse {
    public String contentType;
    public GetTxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTxResponse getTxResponse;
    public GetTxResponse withGetTxResponse(openapisdk.models.shared.GetTxResponse getTxResponse) {
        this.getTxResponse = getTxResponse;
        return this;
    }
}