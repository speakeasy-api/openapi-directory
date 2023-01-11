package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementAchievementsResetForAllPlayersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=achievementId")
    public String achievementId;
    public GamesManagementAchievementsResetForAllPlayersPathParams withAchievementId(String achievementId) {
        this.achievementId = achievementId;
        return this;
    }
}