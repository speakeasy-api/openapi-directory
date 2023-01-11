package openapisdk.models.operations;



public class PlayerDetailsByFreeAgentsResponse {
    public String contentType;
    public PlayerDetailsByFreeAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] players;
    public PlayerDetailsByFreeAgentsResponse withPlayers(Object[] players) {
        this.players = players;
        return this;
    }
    public Long statusCode;
    public PlayerDetailsByFreeAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}