package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasConfigContextsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConfigContextInput request;
    public ExtrasConfigContextsCreateRequest withRequest(openapisdk.models.shared.WritableConfigContextInput request) {
        this.request = request;
        return this;
    }
}