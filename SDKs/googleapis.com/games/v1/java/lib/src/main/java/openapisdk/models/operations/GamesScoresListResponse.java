package openapisdk.models.operations;



public class GamesScoresListResponse {
    public String contentType;
    public GamesScoresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaderboardScores leaderboardScores;
    public GamesScoresListResponse withLeaderboardScores(openapisdk.models.shared.LeaderboardScores leaderboardScores) {
        this.leaderboardScores = leaderboardScores;
        return this;
    }
    public Long statusCode;
    public GamesScoresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}