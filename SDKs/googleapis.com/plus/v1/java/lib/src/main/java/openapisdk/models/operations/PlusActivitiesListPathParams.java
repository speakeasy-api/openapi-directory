package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusActivitiesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public PlusActivitiesListCollectionEnum collection;
    public PlusActivitiesListPathParams withCollection(PlusActivitiesListCollectionEnum collection) {
        this.collection = collection;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PlusActivitiesListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}