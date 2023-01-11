package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GamesPlayersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public GamesPlayersListCollectionEnum collection;
    public GamesPlayersListPathParams withCollection(GamesPlayersListCollectionEnum collection) {
        this.collection = collection;
        return this;
    }
}