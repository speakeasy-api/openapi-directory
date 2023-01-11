package openapisdk.models.operations;



public class GamesLeaderboardsListResponse {
    public String contentType;
    public GamesLeaderboardsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaderboardListResponse leaderboardListResponse;
    public GamesLeaderboardsListResponse withLeaderboardListResponse(openapisdk.models.shared.LeaderboardListResponse leaderboardListResponse) {
        this.leaderboardListResponse = leaderboardListResponse;
        return this;
    }
    public Long statusCode;
    public GamesLeaderboardsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}