package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsMetadataDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cgm_id")
    public String cgmId;
    public CollectionsMetadataDetailPathParams withCgmId(String cgmId) {
        this.cgmId = cgmId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsMetadataDetailPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}