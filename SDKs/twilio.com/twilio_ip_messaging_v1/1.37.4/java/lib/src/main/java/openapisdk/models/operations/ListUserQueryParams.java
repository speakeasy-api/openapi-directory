package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUserQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}