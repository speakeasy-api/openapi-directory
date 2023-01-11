package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityMarkNotificationsAsReadRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActivityMarkNotificationsAsReadRequestBody request;
    public ActivityMarkNotificationsAsReadRequest withRequest(ActivityMarkNotificationsAsReadRequestBody request) {
        this.request = request;
        return this;
    }
}