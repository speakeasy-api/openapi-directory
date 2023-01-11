package openapisdk.models.operations;



public class GetStringStatsResponse {
    public openapisdk.models.shared.ClientStringStats clientStringStats;
    public GetStringStatsResponse withClientStringStats(openapisdk.models.shared.ClientStringStats clientStringStats) {
        this.clientStringStats = clientStringStats;
        return this;
    }
    public String contentType;
    public GetStringStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetStringStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetStringStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}