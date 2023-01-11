package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LiabilitiesGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LiabilitiesGetRequest request;
    public LiabilitiesGetRequest withRequest(openapisdk.models.shared.LiabilitiesGetRequest request) {
        this.request = request;
        return this;
    }
}