package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandFieldTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUnderstandFieldTypeQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}