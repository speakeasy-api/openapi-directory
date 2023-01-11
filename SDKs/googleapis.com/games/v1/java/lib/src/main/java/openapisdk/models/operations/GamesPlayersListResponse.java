package openapisdk.models.operations;



public class GamesPlayersListResponse {
    public String contentType;
    public GamesPlayersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerListResponse playerListResponse;
    public GamesPlayersListResponse withPlayerListResponse(openapisdk.models.shared.PlayerListResponse playerListResponse) {
        this.playerListResponse = playerListResponse;
        return this;
    }
    public Long statusCode;
    public GamesPlayersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}