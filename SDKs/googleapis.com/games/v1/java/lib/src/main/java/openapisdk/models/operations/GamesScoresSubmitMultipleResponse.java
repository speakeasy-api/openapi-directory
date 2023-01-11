package openapisdk.models.operations;



public class GamesScoresSubmitMultipleResponse {
    public String contentType;
    public GamesScoresSubmitMultipleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerScoreListResponse playerScoreListResponse;
    public GamesScoresSubmitMultipleResponse withPlayerScoreListResponse(openapisdk.models.shared.PlayerScoreListResponse playerScoreListResponse) {
        this.playerScoreListResponse = playerScoreListResponse;
        return this;
    }
    public Long statusCode;
    public GamesScoresSubmitMultipleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}