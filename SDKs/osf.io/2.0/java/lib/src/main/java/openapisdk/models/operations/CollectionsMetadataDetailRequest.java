package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsMetadataDetailRequest {
    public CollectionsMetadataDetailPathParams pathParams;
    public CollectionsMetadataDetailRequest withPathParams(CollectionsMetadataDetailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CollectionsMetadataDetailRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}