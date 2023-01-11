package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDataSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListDataSessionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}