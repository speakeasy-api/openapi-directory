package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUnderstandFieldQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}