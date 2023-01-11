package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoryPostFileRequest {
    public StoryPostFileQueryParams queryParams;
    public StoryPostFileRequest withQueryParams(StoryPostFileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public StoryPostFileRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}