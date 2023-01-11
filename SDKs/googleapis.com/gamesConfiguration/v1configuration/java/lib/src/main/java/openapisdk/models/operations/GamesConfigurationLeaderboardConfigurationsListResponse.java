package openapisdk.models.operations;



public class GamesConfigurationLeaderboardConfigurationsListResponse {
    public String contentType;
    public GamesConfigurationLeaderboardConfigurationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaderboardConfigurationListResponse leaderboardConfigurationListResponse;
    public GamesConfigurationLeaderboardConfigurationsListResponse withLeaderboardConfigurationListResponse(openapisdk.models.shared.LeaderboardConfigurationListResponse leaderboardConfigurationListResponse) {
        this.leaderboardConfigurationListResponse = leaderboardConfigurationListResponse;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationLeaderboardConfigurationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}