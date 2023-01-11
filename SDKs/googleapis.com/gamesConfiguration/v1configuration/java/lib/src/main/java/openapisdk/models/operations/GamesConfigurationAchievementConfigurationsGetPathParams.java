package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesConfigurationAchievementConfigurationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesConfigurationAchievementConfigurationsGetPathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}