package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LinkTokenGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LinkTokenGetRequest request;
    public LinkTokenGetRequest withRequest(openapisdk.models.shared.LinkTokenGetRequest request) {
        this.request = request;
        return this;
    }
}