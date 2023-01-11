package openapisdk.models.operations;



public class PlayerSeasonSplitStatsResponse {
    public String contentType;
    public PlayerSeasonSplitStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasons;
    public PlayerSeasonSplitStatsResponse withPlayerSeasons(Object[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    public Long statusCode;
    public PlayerSeasonSplitStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}