package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReinitializeRequest {
    public ReinitializePathParams pathParams;
    public ReinitializeRequest withPathParams(ReinitializePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReinitializeActionConfiguration request;
    public ReinitializeRequest withRequest(openapisdk.models.shared.ReinitializeActionConfiguration request) {
        this.request = request;
        return this;
    }
}