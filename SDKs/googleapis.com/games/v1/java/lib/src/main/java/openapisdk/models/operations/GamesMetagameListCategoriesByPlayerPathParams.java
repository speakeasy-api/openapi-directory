package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesMetagameListCategoriesByPlayerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public GamesMetagameListCategoriesByPlayerCollectionEnum collection;
    public GamesMetagameListCategoriesByPlayerPathParams withCollection(GamesMetagameListCategoriesByPlayerCollectionEnum collection) {
        this.collection = collection;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playerId")
    public String playerId;
    public GamesMetagameListCategoriesByPlayerPathParams withPlayerId(String playerId) {
        this.playerId = playerId;
        return this;
    }
}