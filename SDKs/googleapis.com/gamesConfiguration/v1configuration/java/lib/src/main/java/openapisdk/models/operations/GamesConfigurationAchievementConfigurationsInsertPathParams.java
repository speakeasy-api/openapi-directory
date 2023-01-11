package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationAchievementConfigurationsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesConfigurationAchievementConfigurationsInsertPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}