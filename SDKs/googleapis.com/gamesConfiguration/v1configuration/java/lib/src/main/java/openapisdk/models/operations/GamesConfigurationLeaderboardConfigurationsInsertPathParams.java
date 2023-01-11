package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationLeaderboardConfigurationsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesConfigurationLeaderboardConfigurationsInsertPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}