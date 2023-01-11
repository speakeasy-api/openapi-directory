package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAchievementsRevealPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesAchievementsRevealPathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}