package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointAddToQueueQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointAddToQueueQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uri")
    public String uri;
    public EndpointAddToQueueQueryParams withUri(String uri) {
        this.uri = uri;
        return this;
    }
}