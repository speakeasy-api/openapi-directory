package openapisdk.models.operations;



public class ProjectedPlayerSeasonStatsWithAdpResponse {
    public String contentType;
    public ProjectedPlayerSeasonStatsWithAdpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasonProjections;
    public ProjectedPlayerSeasonStatsWithAdpResponse withPlayerSeasonProjections(Object[] playerSeasonProjections) {
        this.playerSeasonProjections = playerSeasonProjections;
        return this;
    }
    public Long statusCode;
    public ProjectedPlayerSeasonStatsWithAdpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}