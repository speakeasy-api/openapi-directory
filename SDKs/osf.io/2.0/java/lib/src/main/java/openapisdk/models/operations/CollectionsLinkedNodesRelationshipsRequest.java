package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedNodesRelationshipsRequest {
    public CollectionsLinkedNodesRelationshipsPathParams pathParams;
    public CollectionsLinkedNodesRelationshipsRequest withPathParams(CollectionsLinkedNodesRelationshipsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CollectionsLinkedNodesRelationshipsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}