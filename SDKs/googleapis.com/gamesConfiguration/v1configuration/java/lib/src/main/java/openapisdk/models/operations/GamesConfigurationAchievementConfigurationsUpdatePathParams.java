package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationAchievementConfigurationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesConfigurationAchievementConfigurationsUpdatePathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}