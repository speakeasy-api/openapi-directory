package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListByocTrunkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListByocTrunkQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}