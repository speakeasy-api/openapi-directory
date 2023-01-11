package openapisdk.models.operations;



public class GamesScoresListWindowResponse {
    public String contentType;
    public GamesScoresListWindowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaderboardScores leaderboardScores;
    public GamesScoresListWindowResponse withLeaderboardScores(openapisdk.models.shared.LeaderboardScores leaderboardScores) {
        this.leaderboardScores = leaderboardScores;
        return this;
    }
    public Long statusCode;
    public GamesScoresListWindowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}