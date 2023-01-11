package openapisdk.models.operations;



public class PlayersResponse {
    public String contentType;
    public PlayersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] players;
    public PlayersResponse withPlayers(Object[] players) {
        this.players = players;
        return this;
    }
    public Long statusCode;
    public PlayersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}