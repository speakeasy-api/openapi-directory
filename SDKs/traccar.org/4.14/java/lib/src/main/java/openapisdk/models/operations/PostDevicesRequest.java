package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDevicesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Device request;
    public PostDevicesRequest withRequest(openapisdk.models.shared.Device request) {
        this.request = request;
        return this;
    }
}