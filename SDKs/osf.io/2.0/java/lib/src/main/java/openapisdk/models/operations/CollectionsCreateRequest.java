package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CollectionsCreateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}