package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttributesComputedRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Attribute request;
    public PostAttributesComputedRequest withRequest(openapisdk.models.shared.Attribute request) {
        this.request = request;
        return this;
    }
}