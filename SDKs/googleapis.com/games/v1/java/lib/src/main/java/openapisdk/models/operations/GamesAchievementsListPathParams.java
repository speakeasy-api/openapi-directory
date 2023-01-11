package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesAchievementsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerId")
    public String playerId;
    public GamesAchievementsListPathParams withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}