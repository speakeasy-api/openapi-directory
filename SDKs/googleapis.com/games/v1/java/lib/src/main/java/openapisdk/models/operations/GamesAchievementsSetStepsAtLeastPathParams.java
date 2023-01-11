package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAchievementsSetStepsAtLeastPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesAchievementsSetStepsAtLeastPathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}