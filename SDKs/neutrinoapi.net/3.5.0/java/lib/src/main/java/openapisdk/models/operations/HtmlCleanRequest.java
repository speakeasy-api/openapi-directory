package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HtmlCleanRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public HtmlCleanRequestBody request;
    public HtmlCleanRequest withRequest(HtmlCleanRequestBody request) {
        this.request = request;
        return this;
    }
}