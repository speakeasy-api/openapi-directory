package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeployedDevicesDeploymentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDeployedDevicesDeploymentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}