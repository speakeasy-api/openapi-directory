package openapisdk.models.operations;



public class GetCommissionStatsByFilterResponse {
    public openapisdk.models.shared.CommissionStats commissionStats;
    public GetCommissionStatsByFilterResponse withCommissionStats(openapisdk.models.shared.CommissionStats commissionStats) {
        this.commissionStats = commissionStats;
        return this;
    }
    public String contentType;
    public GetCommissionStatsByFilterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetCommissionStatsByFilterResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetCommissionStatsByFilterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}