package openapisdk.models.operations;



public class TeamSeasonStatsStandingsResponse {
    public String contentType;
    public TeamSeasonStatsStandingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamSeasonStatsStandingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teamSeasons;
    public TeamSeasonStatsStandingsResponse withTeamSeasons(Object[] teamSeasons) {
        this.teamSeasons = teamSeasons;
        return this;
    }
}