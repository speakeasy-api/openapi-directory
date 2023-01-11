package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedNodesRelationshipsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedNodesRelationshipsPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}