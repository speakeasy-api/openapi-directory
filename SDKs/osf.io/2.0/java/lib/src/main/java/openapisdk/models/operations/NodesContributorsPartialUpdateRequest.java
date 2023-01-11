package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesContributorsPartialUpdateRequest {
    public NodesContributorsPartialUpdatePathParams pathParams;
    public NodesContributorsPartialUpdateRequest withPathParams(NodesContributorsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesContributorsPartialUpdateContributorInput request;
    public NodesContributorsPartialUpdateRequest withRequest(NodesContributorsPartialUpdateContributorInput request) {
        this.request = request;
        return this;
    }
}