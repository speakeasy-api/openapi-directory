package openapisdk.models.operations;



public class GamesScoresSubmitResponse {
    public String contentType;
    public GamesScoresSubmitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerScoreResponse playerScoreResponse;
    public GamesScoresSubmitResponse withPlayerScoreResponse(openapisdk.models.shared.PlayerScoreResponse playerScoreResponse) {
        this.playerScoreResponse = playerScoreResponse;
        return this;
    }
    public Long statusCode;
    public GamesScoresSubmitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}