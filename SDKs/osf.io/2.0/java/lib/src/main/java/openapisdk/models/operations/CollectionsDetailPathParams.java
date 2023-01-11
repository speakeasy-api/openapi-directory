package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsDetailPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}