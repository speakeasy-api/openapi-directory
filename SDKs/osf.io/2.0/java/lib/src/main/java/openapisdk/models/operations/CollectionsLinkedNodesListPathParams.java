package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedNodesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedNodesListPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}