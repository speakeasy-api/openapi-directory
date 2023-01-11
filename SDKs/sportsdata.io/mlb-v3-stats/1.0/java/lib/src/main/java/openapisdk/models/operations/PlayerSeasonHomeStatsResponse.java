package openapisdk.models.operations;



public class PlayerSeasonHomeStatsResponse {
    public String contentType;
    public PlayerSeasonHomeStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasons;
    public PlayerSeasonHomeStatsResponse withPlayerSeasons(Object[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    public Long statusCode;
    public PlayerSeasonHomeStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}