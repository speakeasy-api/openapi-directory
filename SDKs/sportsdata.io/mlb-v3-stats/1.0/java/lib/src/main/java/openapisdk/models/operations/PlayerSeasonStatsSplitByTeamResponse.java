package openapisdk.models.operations;



public class PlayerSeasonStatsSplitByTeamResponse {
    public String contentType;
    public PlayerSeasonStatsSplitByTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasons;
    public PlayerSeasonStatsSplitByTeamResponse withPlayerSeasons(Object[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    public Long statusCode;
    public PlayerSeasonStatsSplitByTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}