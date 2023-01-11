package openapisdk.models.operations;



public class PlayerResponse {
    public String contentType;
    public PlayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object player;
    public PlayerResponse withPlayer(Object player) {
        this.player = player;
        return this;
    }
    public Long statusCode;
    public PlayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}