package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BurnTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BurnTokenRequest request;
    public BurnTokenRequest withRequest(openapisdk.models.shared.BurnTokenRequest request) {
        this.request = request;
        return this;
    }
}