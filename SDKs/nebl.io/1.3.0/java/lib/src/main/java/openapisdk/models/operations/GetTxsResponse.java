package openapisdk.models.operations;



public class GetTxsResponse {
    public String contentType;
    public GetTxsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTxsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTxsResponse getTxsResponse;
    public GetTxsResponse withGetTxsResponse(openapisdk.models.shared.GetTxsResponse getTxsResponse) {
        this.getTxsResponse = getTxsResponse;
        return this;
    }
}