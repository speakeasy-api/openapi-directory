package openapisdk.models.operations;



public class GamesScoresGetResponse {
    public String contentType;
    public GamesScoresGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerLeaderboardScoreListResponse playerLeaderboardScoreListResponse;
    public GamesScoresGetResponse withPlayerLeaderboardScoreListResponse(openapisdk.models.shared.PlayerLeaderboardScoreListResponse playerLeaderboardScoreListResponse) {
        this.playerLeaderboardScoreListResponse = playerLeaderboardScoreListResponse;
        return this;
    }
    public Long statusCode;
    public GamesScoresGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}