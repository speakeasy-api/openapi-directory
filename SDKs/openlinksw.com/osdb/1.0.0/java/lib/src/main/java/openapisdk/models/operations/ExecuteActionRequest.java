package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteActionRequest {
    public ExecuteActionPathParams pathParams;
    public ExecuteActionRequest withPathParams(ExecuteActionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecBody request;
    public ExecuteActionRequest withRequest(openapisdk.models.shared.ExecBody request) {
        this.request = request;
        return this;
    }
}