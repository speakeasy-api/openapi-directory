package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesScoresListWindowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public GamesScoresListWindowCollectionEnum collection;
    public GamesScoresListWindowPathParams withCollection(GamesScoresListWindowCollectionEnum collection) {
        this.collection = collection;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=leaderboardId")
    public String leaderboardId;
    public GamesScoresListWindowPathParams withLeaderboardId(String leaderboardId) {
        this.leaderboardId = leaderboardId;
        return this;
    }
}