package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetEurekaInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetEurekaInfoRequest request;
    public SetEurekaInfoRequest withRequest(openapisdk.models.shared.SetEurekaInfoRequest request) {
        this.request = request;
        return this;
    }
}