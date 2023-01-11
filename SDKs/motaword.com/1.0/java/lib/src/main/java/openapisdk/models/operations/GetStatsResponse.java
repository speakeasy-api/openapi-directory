package openapisdk.models.operations;



public class GetStatsResponse {
    public String contentType;
    public GetStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Stats stats;
    public GetStatsResponse withStats(openapisdk.models.shared.Stats stats) {
        this.stats = stats;
        return this;
    }
    public Long statusCode;
    public GetStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}