package openapisdk.models.operations;



public class GamesConfigurationLeaderboardConfigurationsUpdateResponse {
    public String contentType;
    public GamesConfigurationLeaderboardConfigurationsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaderboardConfiguration leaderboardConfiguration;
    public GamesConfigurationLeaderboardConfigurationsUpdateResponse withLeaderboardConfiguration(openapisdk.models.shared.LeaderboardConfiguration leaderboardConfiguration) {
        this.leaderboardConfiguration = leaderboardConfiguration;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationLeaderboardConfigurationsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}