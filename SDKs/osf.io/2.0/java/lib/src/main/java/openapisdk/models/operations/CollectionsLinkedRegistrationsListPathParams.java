package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedRegistrationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsLinkedRegistrationsListPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}