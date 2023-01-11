package openapisdk.models.operations;



public class GetUserProjectStatsResponse {
    public openapisdk.models.shared.ClientProjectStats clientProjectStats;
    public GetUserProjectStatsResponse withClientProjectStats(openapisdk.models.shared.ClientProjectStats clientProjectStats) {
        this.clientProjectStats = clientProjectStats;
        return this;
    }
    public String contentType;
    public GetUserProjectStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUserProjectStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetUserProjectStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}