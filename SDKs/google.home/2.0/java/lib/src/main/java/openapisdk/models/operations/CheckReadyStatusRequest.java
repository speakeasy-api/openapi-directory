package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckReadyStatusRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckReadyStatusRequest request;
    public CheckReadyStatusRequest withRequest(openapisdk.models.shared.CheckReadyStatusRequest request) {
        this.request = request;
        return this;
    }
}