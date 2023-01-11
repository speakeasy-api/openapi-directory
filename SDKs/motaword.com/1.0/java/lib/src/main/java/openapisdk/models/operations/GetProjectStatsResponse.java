package openapisdk.models.operations;



public class GetProjectStatsResponse {
    public openapisdk.models.shared.ClientProjectStats clientProjectStats;
    public GetProjectStatsResponse withClientProjectStats(openapisdk.models.shared.ClientProjectStats clientProjectStats) {
        this.clientProjectStats = clientProjectStats;
        return this;
    }
    public String contentType;
    public GetProjectStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetProjectStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetProjectStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}