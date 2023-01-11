package openapisdk.models.operations;



public class GamesPlayersGetResponse {
    public String contentType;
    public GamesPlayersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Player player;
    public GamesPlayersGetResponse withPlayer(openapisdk.models.shared.Player player) {
        this.player = player;
        return this;
    }
    public Long statusCode;
    public GamesPlayersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}