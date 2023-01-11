package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditAgentLocationRequest {
    public EditAgentLocationPathParams pathParams;
    public EditAgentLocationRequest withPathParams(EditAgentLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AgentLocationEditRequest request;
    public EditAgentLocationRequest withRequest(openapisdk.models.shared.AgentLocationEditRequest request) {
        this.request = request;
        return this;
    }
}