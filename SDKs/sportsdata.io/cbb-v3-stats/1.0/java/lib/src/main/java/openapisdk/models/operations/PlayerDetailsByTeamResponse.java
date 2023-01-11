package openapisdk.models.operations;



public class PlayerDetailsByTeamResponse {
    public String contentType;
    public PlayerDetailsByTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] players;
    public PlayerDetailsByTeamResponse withPlayers(Object[] players) {
        this.players = players;
        return this;
    }
    public Long statusCode;
    public PlayerDetailsByTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}