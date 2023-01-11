package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeviceSid")
    public String deviceSid;
    public ListDeployedDevicesKeyQueryParams withDeviceSid(String deviceSid) {
        this.deviceSid = deviceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDeployedDevicesKeyQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}