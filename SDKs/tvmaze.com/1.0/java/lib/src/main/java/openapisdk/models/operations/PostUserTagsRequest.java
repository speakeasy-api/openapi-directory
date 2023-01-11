package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserTagsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagInput request;
    public PostUserTagsRequest withRequest(openapisdk.models.shared.TagInput request) {
        this.request = request;
        return this;
    }
}