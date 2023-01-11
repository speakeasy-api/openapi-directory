package openapisdk.models.operations;



public class GamesStatsGetResponse {
    public String contentType;
    public GamesStatsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StatsResponse statsResponse;
    public GamesStatsGetResponse withStatsResponse(openapisdk.models.shared.StatsResponse statsResponse) {
        this.statsResponse = statsResponse;
        return this;
    }
    public Long statusCode;
    public GamesStatsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}