package openapisdk.models.operations;



public class PlayerDetailsByRookieDraftYearResponse {
    public String contentType;
    public PlayerDetailsByRookieDraftYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] players;
    public PlayerDetailsByRookieDraftYearResponse withPlayers(Object[] players) {
        this.players = players;
        return this;
    }
    public Long statusCode;
    public PlayerDetailsByRookieDraftYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}