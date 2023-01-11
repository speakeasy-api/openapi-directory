package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDeploymentQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}