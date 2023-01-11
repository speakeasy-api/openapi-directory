package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNotificationsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Notification request;
    public PostNotificationsRequest withRequest(openapisdk.models.shared.Notification request) {
        this.request = request;
        return this;
    }
}