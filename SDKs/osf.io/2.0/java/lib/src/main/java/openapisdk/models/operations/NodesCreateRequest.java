package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesCreateNodeInput request;
    public NodesCreateRequest withRequest(NodesCreateNodeInput request) {
        this.request = request;
        return this;
    }
}