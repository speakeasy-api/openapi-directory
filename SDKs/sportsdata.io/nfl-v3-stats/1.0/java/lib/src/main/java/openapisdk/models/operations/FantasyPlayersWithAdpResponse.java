package openapisdk.models.operations;



public class FantasyPlayersWithAdpResponse {
    public String contentType;
    public FantasyPlayersWithAdpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] fantasyPlayers;
    public FantasyPlayersWithAdpResponse withFantasyPlayers(Object[] fantasyPlayers) {
        this.fantasyPlayers = fantasyPlayers;
        return this;
    }
    public Long statusCode;
    public FantasyPlayersWithAdpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}