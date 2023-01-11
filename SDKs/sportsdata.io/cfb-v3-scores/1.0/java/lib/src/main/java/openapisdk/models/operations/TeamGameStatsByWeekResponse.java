package openapisdk.models.operations;



public class TeamGameStatsByWeekResponse {
    public String contentType;
    public TeamGameStatsByWeekResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamGameStatsByWeekResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teamGames;
    public TeamGameStatsByWeekResponse withTeamGames(Object[] teamGames) {
        this.teamGames = teamGames;
        return this;
    }
}