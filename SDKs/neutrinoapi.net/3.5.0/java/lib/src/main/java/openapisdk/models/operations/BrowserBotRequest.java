package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BrowserBotRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public BrowserBotRequestBody request;
    public BrowserBotRequest withRequest(BrowserBotRequestBody request) {
        this.request = request;
        return this;
    }
}