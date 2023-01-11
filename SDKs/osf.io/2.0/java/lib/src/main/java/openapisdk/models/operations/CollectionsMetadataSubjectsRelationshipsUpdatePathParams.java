package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsMetadataSubjectsRelationshipsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cgm_id")
    public String cgmId;
    public CollectionsMetadataSubjectsRelationshipsUpdatePathParams withCgmId(String cgmId) {
        this.cgmId = cgmId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsMetadataSubjectsRelationshipsUpdatePathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}