package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedNodesRelationshipsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedNodesRelationshipsDeletePathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}