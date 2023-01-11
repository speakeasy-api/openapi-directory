package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTargetsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TargetInput request;
    public PostTargetsRequest withRequest(openapisdk.models.shared.TargetInput request) {
        this.request = request;
        return this;
    }
}