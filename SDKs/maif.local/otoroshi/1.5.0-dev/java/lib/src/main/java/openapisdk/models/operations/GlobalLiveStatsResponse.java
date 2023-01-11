package openapisdk.models.operations;



public class GlobalLiveStatsResponse {
    public String contentType;
    public GlobalLiveStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Stats stats;
    public GlobalLiveStatsResponse withStats(openapisdk.models.shared.Stats stats) {
        this.stats = stats;
        return this;
    }
    public Long statusCode;
    public GlobalLiveStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}