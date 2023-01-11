package openapisdk.models.operations;



public class ApiUsageHistoryResponse {
    public openapisdk.models.shared.ApiUsageHistoryOut apiUsageHistoryOut;
    public ApiUsageHistoryResponse withApiUsageHistoryOut(openapisdk.models.shared.ApiUsageHistoryOut apiUsageHistoryOut) {
        this.apiUsageHistoryOut = apiUsageHistoryOut;
        return this;
    }
    public String contentType;
    public ApiUsageHistoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiUsageHistoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}