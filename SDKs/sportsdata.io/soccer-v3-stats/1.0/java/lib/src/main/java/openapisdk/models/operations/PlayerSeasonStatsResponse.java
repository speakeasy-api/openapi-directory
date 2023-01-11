package openapisdk.models.operations;



public class PlayerSeasonStatsResponse {
    public String contentType;
    public PlayerSeasonStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasons;
    public PlayerSeasonStatsResponse withPlayerSeasons(Object[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    public Long statusCode;
    public PlayerSeasonStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}