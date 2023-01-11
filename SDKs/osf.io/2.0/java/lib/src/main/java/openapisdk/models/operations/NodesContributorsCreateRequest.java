package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesContributorsCreateRequest {
    public NodesContributorsCreatePathParams pathParams;
    public NodesContributorsCreateRequest withPathParams(NodesContributorsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesContributorsCreateContributorInput request;
    public NodesContributorsCreateRequest withRequest(NodesContributorsCreateContributorInput request) {
        this.request = request;
        return this;
    }
}