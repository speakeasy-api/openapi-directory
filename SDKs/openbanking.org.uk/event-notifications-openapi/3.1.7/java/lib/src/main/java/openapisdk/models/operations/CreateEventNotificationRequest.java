package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventNotificationRequest {
    public CreateEventNotificationHeaders headers;
    public CreateEventNotificationRequest withHeaders(CreateEventNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/jwt")
    public String request;
    public CreateEventNotificationRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}