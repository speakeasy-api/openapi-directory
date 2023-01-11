package openapisdk.models.operations;



public class PlayerDetailsByPlayerResponse {
    public String contentType;
    public PlayerDetailsByPlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] players;
    public PlayerDetailsByPlayerResponse withPlayers(Object[] players) {
        this.players = players;
        return this;
    }
    public Long statusCode;
    public PlayerDetailsByPlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}