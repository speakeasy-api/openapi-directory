package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UrlInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UrlInfoRequestBody request;
    public UrlInfoRequest withRequest(UrlInfoRequestBody request) {
        this.request = request;
        return this;
    }
}