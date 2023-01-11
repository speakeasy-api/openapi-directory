package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAchievementsUnlockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesAchievementsUnlockPathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}