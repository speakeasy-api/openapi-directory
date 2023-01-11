package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsCollectedMetadataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cgm_id")
    public String cgmId;
    public CollectionsCollectedMetadataPathParams withCgmId(String cgmId) {
        this.cgmId = cgmId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsCollectedMetadataPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}