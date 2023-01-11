package openapisdk.models.operations;



public class ServiceLiveStatsResponse {
    public byte[] body;
    public ServiceLiveStatsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ServiceLiveStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Stats stats;
    public ServiceLiveStatsResponse withStats(openapisdk.models.shared.Stats stats) {
        this.stats = stats;
        return this;
    }
    public Long statusCode;
    public ServiceLiveStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}