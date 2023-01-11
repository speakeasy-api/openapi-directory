package openapisdk.models.operations;



public class ProjectedPlayerSeasonStatsResponse {
    public String contentType;
    public ProjectedPlayerSeasonStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasonProjections;
    public ProjectedPlayerSeasonStatsResponse withPlayerSeasonProjections(Object[] playerSeasonProjections) {
        this.playerSeasonProjections = playerSeasonProjections;
        return this;
    }
    public Long statusCode;
    public ProjectedPlayerSeasonStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}