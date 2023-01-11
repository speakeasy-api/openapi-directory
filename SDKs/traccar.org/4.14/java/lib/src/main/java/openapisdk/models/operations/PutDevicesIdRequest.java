package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDevicesIdRequest {
    public PutDevicesIdPathParams pathParams;
    public PutDevicesIdRequest withPathParams(PutDevicesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Device request;
    public PutDevicesIdRequest withRequest(openapisdk.models.shared.Device request) {
        this.request = request;
        return this;
    }
}