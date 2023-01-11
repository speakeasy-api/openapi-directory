package openapisdk.models.operations;



public class GamesSuggestedReadResponse {
    public String contentType;
    public GamesSuggestedReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GameSingle gameSingle;
    public GamesSuggestedReadResponse withGameSingle(openapisdk.models.shared.GameSingle gameSingle) {
        this.gameSingle = gameSingle;
        return this;
    }
    public Long statusCode;
    public GamesSuggestedReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}