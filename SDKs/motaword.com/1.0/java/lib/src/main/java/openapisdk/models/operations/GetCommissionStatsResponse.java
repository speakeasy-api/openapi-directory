package openapisdk.models.operations;



public class GetCommissionStatsResponse {
    public openapisdk.models.shared.CommissionStats commissionStats;
    public GetCommissionStatsResponse withCommissionStats(openapisdk.models.shared.CommissionStats commissionStats) {
        this.commissionStats = commissionStats;
        return this;
    }
    public String contentType;
    public GetCommissionStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCommissionStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCommissionStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}