package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsAddMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsAddMetadataPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}