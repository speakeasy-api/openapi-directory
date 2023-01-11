package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationAchievementConfigurationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesConfigurationAchievementConfigurationsDeletePathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}