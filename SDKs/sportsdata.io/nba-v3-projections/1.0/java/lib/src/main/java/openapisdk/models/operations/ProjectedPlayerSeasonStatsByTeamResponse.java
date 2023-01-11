package openapisdk.models.operations;



public class ProjectedPlayerSeasonStatsByTeamResponse {
    public String contentType;
    public ProjectedPlayerSeasonStatsByTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasonProjections;
    public ProjectedPlayerSeasonStatsByTeamResponse withPlayerSeasonProjections(Object[] playerSeasonProjections) {
        this.playerSeasonProjections = playerSeasonProjections;
        return this;
    }
    public Long statusCode;
    public ProjectedPlayerSeasonStatsByTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}