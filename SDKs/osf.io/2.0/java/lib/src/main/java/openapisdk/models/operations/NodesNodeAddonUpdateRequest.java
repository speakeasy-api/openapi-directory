package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesNodeAddonUpdateRequest {
    public NodesNodeAddonUpdatePathParams pathParams;
    public NodesNodeAddonUpdateRequest withPathParams(NodesNodeAddonUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NodesNodeAddonUpdateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}