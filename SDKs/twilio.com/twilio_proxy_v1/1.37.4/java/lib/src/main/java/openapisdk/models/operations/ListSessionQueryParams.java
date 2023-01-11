package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSessionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}