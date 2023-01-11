package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentsHiuNotifyRequest {
    public PostV05ConsentsHiuNotifyHeaders headers;
    public PostV05ConsentsHiuNotifyRequest withHeaders(PostV05ConsentsHiuNotifyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuConsentNotificationEvent request;
    public PostV05ConsentsHiuNotifyRequest withRequest(openapisdk.models.shared.HiuConsentNotificationEvent request) {
        this.request = request;
        return this;
    }
}