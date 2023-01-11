package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTrunkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListTrunkQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}