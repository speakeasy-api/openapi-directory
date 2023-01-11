package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsMetadataRegistrationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsMetadataRegistrationsListPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}