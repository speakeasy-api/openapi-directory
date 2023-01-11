package openapisdk.models.operations;



public class GamesLeaderboardsGetResponse {
    public String contentType;
    public GamesLeaderboardsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Leaderboard leaderboard;
    public GamesLeaderboardsGetResponse withLeaderboard(openapisdk.models.shared.Leaderboard leaderboard) {
        this.leaderboard = leaderboard;
        return this;
    }
    public Long statusCode;
    public GamesLeaderboardsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}