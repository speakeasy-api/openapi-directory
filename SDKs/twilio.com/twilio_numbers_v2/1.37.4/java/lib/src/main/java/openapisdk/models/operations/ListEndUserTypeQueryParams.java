package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEndUserTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListEndUserTypeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}