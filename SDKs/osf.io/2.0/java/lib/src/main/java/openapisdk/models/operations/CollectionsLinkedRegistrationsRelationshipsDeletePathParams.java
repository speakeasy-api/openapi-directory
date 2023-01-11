package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedRegistrationsRelationshipsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedRegistrationsRelationshipsDeletePathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}