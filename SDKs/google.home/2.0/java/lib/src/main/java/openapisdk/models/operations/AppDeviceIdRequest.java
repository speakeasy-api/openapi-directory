package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppDeviceIdRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppDeviceIdRequest request;
    public AppDeviceIdRequest withRequest(openapisdk.models.shared.AppDeviceIdRequest request) {
        this.request = request;
        return this;
    }
}