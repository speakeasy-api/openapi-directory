package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComptageRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ComptageRequest request;
    public ComptageRequest withRequest(openapisdk.models.shared.ComptageRequest request) {
        this.request = request;
        return this;
    }
}