package openapisdk.models.operations;



public class BatterVsPitcherStatsResponse {
    public String contentType;
    public BatterVsPitcherStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playerSeasons;
    public BatterVsPitcherStatsResponse withPlayerSeasons(Object[] playerSeasons) {
        this.playerSeasons = playerSeasons;
        return this;
    }
    public Long statusCode;
    public BatterVsPitcherStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}