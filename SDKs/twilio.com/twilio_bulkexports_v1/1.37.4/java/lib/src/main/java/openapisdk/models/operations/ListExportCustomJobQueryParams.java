package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListExportCustomJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListExportCustomJobQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}