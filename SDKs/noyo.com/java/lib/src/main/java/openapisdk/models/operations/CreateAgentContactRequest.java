package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAgentContactRequest {
    public CreateAgentContactPathParams pathParams;
    public CreateAgentContactRequest withPathParams(CreateAgentContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AgentContactCreateRequest request;
    public CreateAgentContactRequest withRequest(openapisdk.models.shared.AgentContactCreateRequest request) {
        this.request = request;
        return this;
    }
}