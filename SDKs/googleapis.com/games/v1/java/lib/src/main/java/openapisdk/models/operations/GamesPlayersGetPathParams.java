package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesPlayersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerId")
    public String playerId;
    public GamesPlayersGetPathParams withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}