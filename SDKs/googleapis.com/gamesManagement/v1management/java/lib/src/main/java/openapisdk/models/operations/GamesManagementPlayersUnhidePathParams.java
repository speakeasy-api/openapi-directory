package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesManagementPlayersUnhidePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GamesManagementPlayersUnhidePathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerId")
    public String playerId;
    public GamesManagementPlayersUnhidePathParams withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}