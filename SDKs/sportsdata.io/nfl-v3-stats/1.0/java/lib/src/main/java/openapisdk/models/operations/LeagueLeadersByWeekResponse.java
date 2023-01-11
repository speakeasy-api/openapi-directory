package openapisdk.models.operations;



public class LeagueLeadersByWeekResponse {
    public String contentType;
    public LeagueLeadersByWeekResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerGames;
    public LeagueLeadersByWeekResponse withPlayerGames(Object[] playerGames) {
        this.playerGames = playerGames;
        return this;
    }
    public Long statusCode;
    public LeagueLeadersByWeekResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}