package openapisdk.models.operations;



public class LeagueLeadersBySeasonResponse {
    public String contentType;
    public LeagueLeadersBySeasonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasons;
    public LeagueLeadersBySeasonResponse withPlayerSeasons(Object[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    public Long statusCode;
    public LeagueLeadersBySeasonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}