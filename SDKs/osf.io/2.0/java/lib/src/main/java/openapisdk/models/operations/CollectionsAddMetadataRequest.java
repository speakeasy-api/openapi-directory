package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsAddMetadataRequest {
    public CollectionsAddMetadataPathParams pathParams;
    public CollectionsAddMetadataRequest withPathParams(CollectionsAddMetadataPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CollectionsAddMetadataRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}