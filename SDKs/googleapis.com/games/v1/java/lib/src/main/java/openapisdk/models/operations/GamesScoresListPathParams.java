package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesScoresListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public GamesScoresListCollectionEnum collection;
    public GamesScoresListPathParams withCollection(GamesScoresListCollectionEnum collection) {
        this.collection = collection;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leaderboardId")
    public String leaderboardId;
    public GamesScoresListPathParams withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
}