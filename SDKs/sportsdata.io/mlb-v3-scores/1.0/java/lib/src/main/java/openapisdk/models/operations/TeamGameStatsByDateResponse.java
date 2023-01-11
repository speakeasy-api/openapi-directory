package openapisdk.models.operations;



public class TeamGameStatsByDateResponse {
    public String contentType;
    public TeamGameStatsByDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamGameStatsByDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teamGames;
    public TeamGameStatsByDateResponse withTeamGames(Object[] teamGames) {
        this.teamGames = teamGames;
        return this;
    }
}