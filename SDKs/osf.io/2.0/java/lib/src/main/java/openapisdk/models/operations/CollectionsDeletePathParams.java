package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsDeletePathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}