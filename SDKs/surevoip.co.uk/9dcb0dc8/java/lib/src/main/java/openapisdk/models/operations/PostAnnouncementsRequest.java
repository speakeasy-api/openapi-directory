package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAnnouncementsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostAnnouncementsRequestBody request;
    public PostAnnouncementsRequest withRequest(PostAnnouncementsRequestBody request) {
        this.request = request;
        return this;
    }
}