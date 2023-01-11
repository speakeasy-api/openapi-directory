package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesDeviceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeploymentSid")
    public String deploymentSid;
    public ListDeployedDevicesDeviceQueryParams withDeploymentSid(String deploymentSid) {
        this.deploymentSid = deploymentSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDeployedDevicesDeviceQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}