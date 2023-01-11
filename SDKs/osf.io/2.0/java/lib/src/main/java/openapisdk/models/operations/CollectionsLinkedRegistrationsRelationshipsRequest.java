package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsLinkedRegistrationsRelationshipsRequest {
    public CollectionsLinkedRegistrationsRelationshipsPathParams pathParams;
    public CollectionsLinkedRegistrationsRelationshipsRequest withPathParams(CollectionsLinkedRegistrationsRelationshipsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CollectionsLinkedRegistrationsRelationshipsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}