package openapisdk.models.operations;



public class LeaderboardResponse {
    public String contentType;
    public LeaderboardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object leaderboard;
    public LeaderboardResponse withLeaderboard(Object leaderboard) {
        this.leaderboard = leaderboard;
        return this;
    }
    public Long statusCode;
    public LeaderboardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}