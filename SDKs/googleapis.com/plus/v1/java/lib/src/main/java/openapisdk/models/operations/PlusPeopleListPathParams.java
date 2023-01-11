package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PlusPeopleListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection")
    public PlusPeopleListCollectionEnum collection;
    public PlusPeopleListPathParams withCollection(PlusPeopleListCollectionEnum collection) {
        this.collection = collection;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public PlusPeopleListPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}