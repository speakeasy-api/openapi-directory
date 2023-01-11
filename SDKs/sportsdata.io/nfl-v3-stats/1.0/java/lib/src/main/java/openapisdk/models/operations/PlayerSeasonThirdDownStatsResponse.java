package openapisdk.models.operations;



public class PlayerSeasonThirdDownStatsResponse {
    public String contentType;
    public PlayerSeasonThirdDownStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasonThirdDowns;
    public PlayerSeasonThirdDownStatsResponse withPlayerSeasonThirdDowns(Object[] playerSeasonThirdDowns) {
        this.playerSeasonThirdDowns = playerSeasonThirdDowns;
        return this;
    }
    public Long statusCode;
    public PlayerSeasonThirdDownStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}