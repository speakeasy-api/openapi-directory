package openapisdk.models.operations;



public class GamesReadResponse {
    public String contentType;
    public GamesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GameSingle gameSingle;
    public GamesReadResponse withGameSingle(openapisdk.models.shared.GameSingle gameSingle) {
        this.gameSingle = gameSingle;
        return this;
    }
    public Long statusCode;
    public GamesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}