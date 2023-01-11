package openapisdk.models.operations;



public class PlayerSeasonStatsByPlayerResponse {
    public String contentType;
    public PlayerSeasonStatsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasons;
    public PlayerSeasonStatsByPlayerResponse withPlayerSeasons(Object[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    public Long statusCode;
    public PlayerSeasonStatsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}