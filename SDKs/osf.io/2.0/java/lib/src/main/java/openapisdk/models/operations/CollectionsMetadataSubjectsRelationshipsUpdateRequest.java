package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsMetadataSubjectsRelationshipsUpdateRequest {
    public CollectionsMetadataSubjectsRelationshipsUpdatePathParams pathParams;
    public CollectionsMetadataSubjectsRelationshipsUpdateRequest withPathParams(CollectionsMetadataSubjectsRelationshipsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CollectionsMetadataSubjectsRelationshipsUpdateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}