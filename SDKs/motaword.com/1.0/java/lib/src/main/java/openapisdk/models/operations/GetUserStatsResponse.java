package openapisdk.models.operations;



public class GetUserStatsResponse {
    public String contentType;
    public GetUserStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUserStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Stats stats;
    public GetUserStatsResponse withStats(openapisdk.models.shared.Stats stats) {
        this.stats = stats;
        return this;
    }
    public Long statusCode;
    public GetUserStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}