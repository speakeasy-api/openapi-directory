package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUsAppToPersonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUsAppToPersonQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}