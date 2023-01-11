package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationAchievementConfigurationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesConfigurationAchievementConfigurationsListPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}