package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationLeaderboardConfigurationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesConfigurationLeaderboardConfigurationsListPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}