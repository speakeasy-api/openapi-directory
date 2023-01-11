package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedRegistrationsRelationshipsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedRegistrationsRelationshipsPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}