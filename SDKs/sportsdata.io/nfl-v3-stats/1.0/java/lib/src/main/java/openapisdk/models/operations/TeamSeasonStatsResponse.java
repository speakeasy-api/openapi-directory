package openapisdk.models.operations;



public class TeamSeasonStatsResponse {
    public String contentType;
    public TeamSeasonStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamSeasonStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teamSeasons;
    public TeamSeasonStatsResponse withTeamSeasons(Object[] teamSeasons) {
        this.teamSeasons = teamSeasons;
        return this;
    }
}