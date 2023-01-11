package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedPreprintsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedPreprintsListPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}