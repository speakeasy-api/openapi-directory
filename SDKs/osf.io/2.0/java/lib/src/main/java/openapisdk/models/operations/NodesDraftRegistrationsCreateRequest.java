package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesDraftRegistrationsCreateRequest {
    public NodesDraftRegistrationsCreatePathParams pathParams;
    public NodesDraftRegistrationsCreateRequest withPathParams(NodesDraftRegistrationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesDraftRegistrationsCreateDraftRegistrationInput request;
    public NodesDraftRegistrationsCreateRequest withRequest(NodesDraftRegistrationsCreateDraftRegistrationInput request) {
        this.request = request;
        return this;
    }
}