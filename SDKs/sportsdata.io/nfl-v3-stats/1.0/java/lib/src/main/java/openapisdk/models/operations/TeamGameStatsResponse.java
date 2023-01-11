package openapisdk.models.operations;



public class TeamGameStatsResponse {
    public String contentType;
    public TeamGameStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamGameStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teamGames;
    public TeamGameStatsResponse withTeamGames(Object[] teamGames) {
        this.teamGames = teamGames;
        return this;
    }
}