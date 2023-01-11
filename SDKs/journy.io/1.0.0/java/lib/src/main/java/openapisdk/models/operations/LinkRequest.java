package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LinkRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public LinkRequestBody request;
    public LinkRequest withRequest(LinkRequestBody request) {
        this.request = request;
        return this;
    }
}