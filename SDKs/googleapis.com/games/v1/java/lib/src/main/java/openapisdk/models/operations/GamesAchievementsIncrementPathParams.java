package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAchievementsIncrementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesAchievementsIncrementPathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}