package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceRoleQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}