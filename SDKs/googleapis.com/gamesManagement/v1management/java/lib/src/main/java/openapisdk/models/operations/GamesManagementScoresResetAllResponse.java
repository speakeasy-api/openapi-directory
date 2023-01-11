package openapisdk.models.operations;



public class GamesManagementScoresResetAllResponse {
    public String contentType;
    public GamesManagementScoresResetAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerScoreResetAllResponse playerScoreResetAllResponse;
    public GamesManagementScoresResetAllResponse withPlayerScoreResetAllResponse(openapisdk.models.shared.PlayerScoreResetAllResponse playerScoreResetAllResponse) {
        this.playerScoreResetAllResponse = playerScoreResetAllResponse;
        return this;
    }
    public Long statusCode;
    public GamesManagementScoresResetAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}