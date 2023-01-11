package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedRegistrationsRelationshipsDeleteRequest {
    public CollectionsLinkedRegistrationsRelationshipsDeletePathParams pathParams;
    public CollectionsLinkedRegistrationsRelationshipsDeleteRequest withPathParams(CollectionsLinkedRegistrationsRelationshipsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CollectionsLinkedRegistrationsRelationshipsDeleteRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}