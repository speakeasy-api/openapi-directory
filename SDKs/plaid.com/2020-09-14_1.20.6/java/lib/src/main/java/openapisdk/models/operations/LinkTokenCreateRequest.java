package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LinkTokenCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LinkTokenCreateRequest request;
    public LinkTokenCreateRequest withRequest(openapisdk.models.shared.LinkTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}