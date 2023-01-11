package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTaskQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}