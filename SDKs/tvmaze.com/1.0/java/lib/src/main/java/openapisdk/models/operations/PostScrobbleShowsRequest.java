package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostScrobbleShowsRequest {
    public PostScrobbleShowsQueryParams queryParams;
    public PostScrobbleShowsRequest withQueryParams(PostScrobbleShowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostScrobbleShowsRequestBody[] request;
    public PostScrobbleShowsRequest withRequest(PostScrobbleShowsRequestBody[] request) {
        this.request = request;
        return this;
    }
}