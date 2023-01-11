package openapisdk.models.operations;



public class ApiUsageHistoryAggregateResponse {
    public openapisdk.models.shared.ApiUsageAggregatedOut apiUsageAggregatedOut;
    public ApiUsageHistoryAggregateResponse withApiUsageAggregatedOut(openapisdk.models.shared.ApiUsageAggregatedOut apiUsageAggregatedOut) {
        this.apiUsageAggregatedOut = apiUsageAggregatedOut;
        return this;
    }
    public String contentType;
    public ApiUsageHistoryAggregateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiUsageHistoryAggregateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}