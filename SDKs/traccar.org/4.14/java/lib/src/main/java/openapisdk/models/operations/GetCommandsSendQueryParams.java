package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommandsSendQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deviceId")
    public Long deviceId;
    public GetCommandsSendQueryParams withDeviceId(Long deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}