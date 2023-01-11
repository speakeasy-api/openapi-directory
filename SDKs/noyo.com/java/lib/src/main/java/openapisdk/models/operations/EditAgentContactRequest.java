package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditAgentContactRequest {
    public EditAgentContactPathParams pathParams;
    public EditAgentContactRequest withPathParams(EditAgentContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AgentContactEditRequest request;
    public EditAgentContactRequest withRequest(openapisdk.models.shared.AgentContactEditRequest request) {
        this.request = request;
        return this;
    }
}