package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsMetadataRegistrationsDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cgm_id")
    public String cgmId;
    public CollectionsMetadataRegistrationsDetailPathParams withCgmId(String cgmId) {
        this.cgmId = cgmId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public String collectionId;
    public CollectionsMetadataRegistrationsDetailPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}