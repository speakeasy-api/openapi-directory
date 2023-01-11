package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedRegistrationsRelationshipsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedRegistrationsRelationshipsCreatePathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}