package openapisdk.models.operations;



public class GamesManagementScoresResetResponse {
    public String contentType;
    public GamesManagementScoresResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerScoreResetResponse playerScoreResetResponse;
    public GamesManagementScoresResetResponse withPlayerScoreResetResponse(openapisdk.models.shared.PlayerScoreResetResponse playerScoreResetResponse) {
        this.playerScoreResetResponse = playerScoreResetResponse;
        return this;
    }
    public Long statusCode;
    public GamesManagementScoresResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}