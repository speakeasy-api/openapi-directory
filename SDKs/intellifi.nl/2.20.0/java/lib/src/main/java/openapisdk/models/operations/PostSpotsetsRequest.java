package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSpotsetsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SpotSetCreateInput request;
    public PostSpotsetsRequest withRequest(openapisdk.models.shared.SpotSetCreateInput request) {
        this.request = request;
        return this;
    }
}