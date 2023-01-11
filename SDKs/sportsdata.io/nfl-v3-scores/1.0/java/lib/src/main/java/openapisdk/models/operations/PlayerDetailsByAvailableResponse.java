package openapisdk.models.operations;



public class PlayerDetailsByAvailableResponse {
    public String contentType;
    public PlayerDetailsByAvailableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] players;
    public PlayerDetailsByAvailableResponse withPlayers(Object[] players) {
        this.players = players;
        return this;
    }
    public Long statusCode;
    public PlayerDetailsByAvailableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}