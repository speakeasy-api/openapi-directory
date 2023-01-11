package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementAchievementsResetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesManagementAchievementsResetPathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}