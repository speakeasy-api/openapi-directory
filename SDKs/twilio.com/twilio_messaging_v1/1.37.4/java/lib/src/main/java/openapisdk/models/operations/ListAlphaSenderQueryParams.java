package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAlphaSenderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListAlphaSenderQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}