package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditAgentRequest {
    public EditAgentPathParams pathParams;
    public EditAgentRequest withPathParams(EditAgentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AgentEditRequest request;
    public EditAgentRequest withRequest(openapisdk.models.shared.AgentEditRequest request) {
        this.request = request;
        return this;
    }
}