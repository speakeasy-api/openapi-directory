package openapisdk.models.operations;



public class GamesConfigurationLeaderboardConfigurationsInsertResponse {
    public String contentType;
    public GamesConfigurationLeaderboardConfigurationsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaderboardConfiguration leaderboardConfiguration;
    public GamesConfigurationLeaderboardConfigurationsInsertResponse withLeaderboardConfiguration(openapisdk.models.shared.LeaderboardConfiguration leaderboardConfiguration) {
        this.leaderboardConfiguration = leaderboardConfiguration;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationLeaderboardConfigurationsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}