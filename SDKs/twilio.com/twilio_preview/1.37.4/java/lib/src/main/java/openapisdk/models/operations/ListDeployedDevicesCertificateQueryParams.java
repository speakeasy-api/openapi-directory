package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeviceSid")
    public String deviceSid;
    public ListDeployedDevicesCertificateQueryParams withDeviceSid(String deviceSid) {
        this.deviceSid = deviceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDeployedDevicesCertificateQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}