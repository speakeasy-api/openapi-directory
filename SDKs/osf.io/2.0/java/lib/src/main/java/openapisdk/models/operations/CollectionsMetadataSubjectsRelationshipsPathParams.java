package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsMetadataSubjectsRelationshipsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cgm_id")
    public String cgmId;
    public CollectionsMetadataSubjectsRelationshipsPathParams withCgmId(String cgmId) {
        this.cgmId = cgmId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsMetadataSubjectsRelationshipsPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}