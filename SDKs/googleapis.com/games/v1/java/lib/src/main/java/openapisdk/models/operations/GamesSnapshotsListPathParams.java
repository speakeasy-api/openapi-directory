package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesSnapshotsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerId")
    public String playerId;
    public GamesSnapshotsListPathParams withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}