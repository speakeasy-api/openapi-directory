package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesRequest {
    public PostFilesQueryParams queryParams;
    public PostFilesRequest withQueryParams(PostFilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostFilesRequestBody request;
    public PostFilesRequest withRequest(PostFilesRequestBody request) {
        this.request = request;
        return this;
    }
}