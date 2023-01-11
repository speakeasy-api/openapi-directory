package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesDraftRegistrationsPartialUpdateRequest {
    public NodesDraftRegistrationsPartialUpdatePathParams pathParams;
    public NodesDraftRegistrationsPartialUpdateRequest withPathParams(NodesDraftRegistrationsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesDraftRegistrationsPartialUpdateDraftRegistrationInput request;
    public NodesDraftRegistrationsPartialUpdateRequest withRequest(NodesDraftRegistrationsPartialUpdateDraftRegistrationInput request) {
        this.request = request;
        return this;
    }
}