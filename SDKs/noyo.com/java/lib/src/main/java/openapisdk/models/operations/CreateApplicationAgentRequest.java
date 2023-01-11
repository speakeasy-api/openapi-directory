package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationAgentRequest {
    public CreateApplicationAgentPathParams pathParams;
    public CreateApplicationAgentRequest withPathParams(CreateApplicationAgentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AgentCreateRequest request;
    public CreateApplicationAgentRequest withRequest(openapisdk.models.shared.AgentCreateRequest request) {
        this.request = request;
        return this;
    }
}