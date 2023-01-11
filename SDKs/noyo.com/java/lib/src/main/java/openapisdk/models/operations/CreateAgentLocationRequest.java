package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAgentLocationRequest {
    public CreateAgentLocationPathParams pathParams;
    public CreateAgentLocationRequest withPathParams(CreateAgentLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AgentLocationCreateRequest request;
    public CreateAgentLocationRequest withRequest(openapisdk.models.shared.AgentLocationCreateRequest request) {
        this.request = request;
        return this;
    }
}