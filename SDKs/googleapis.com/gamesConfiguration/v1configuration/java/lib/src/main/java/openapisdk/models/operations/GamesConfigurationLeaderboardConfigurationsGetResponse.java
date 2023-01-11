package openapisdk.models.operations;



public class GamesConfigurationLeaderboardConfigurationsGetResponse {
    public String contentType;
    public GamesConfigurationLeaderboardConfigurationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LeaderboardConfiguration leaderboardConfiguration;
    public GamesConfigurationLeaderboardConfigurationsGetResponse withLeaderboardConfiguration(openapisdk.models.shared.LeaderboardConfiguration leaderboardConfiguration) {
        this.leaderboardConfiguration = leaderboardConfiguration;
        return this;
    }
    public Long statusCode;
    public GamesConfigurationLeaderboardConfigurationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}