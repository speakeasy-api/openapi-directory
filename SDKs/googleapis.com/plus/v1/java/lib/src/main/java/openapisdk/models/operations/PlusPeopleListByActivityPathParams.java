package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusPeopleListByActivityPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=activityId")
    public String activityId;
    public PlusPeopleListByActivityPathParams withActivityId(String activityId) {
        this.activityId = activityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public PlusPeopleListByActivityCollectionEnum collection;
    public PlusPeopleListByActivityPathParams withCollection(PlusPeopleListByActivityCollectionEnum collection) {
        this.collection = collection;
        return this;
    }
}