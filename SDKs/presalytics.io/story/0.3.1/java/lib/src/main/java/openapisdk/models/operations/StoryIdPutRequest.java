package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryIdPutRequest {
    public StoryIdPutPathParams pathParams;
    public StoryIdPutRequest withPathParams(StoryIdPutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public StoryIdPutQueryParams queryParams;
    public StoryIdPutRequest withQueryParams(StoryIdPutQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Story request;
    public StoryIdPutRequest withRequest(openapisdk.models.shared.Story request) {
        this.request = request;
        return this;
    }
}