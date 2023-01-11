package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentsHiuOnNotifyRequest {
    public PostV05ConsentsHiuOnNotifyHeaders headers;
    public PostV05ConsentsHiuOnNotifyRequest withHeaders(PostV05ConsentsHiuOnNotifyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuConsentNotificationResponse request;
    public PostV05ConsentsHiuOnNotifyRequest withRequest(openapisdk.models.shared.HiuConsentNotificationResponse request) {
        this.request = request;
        return this;
    }
}