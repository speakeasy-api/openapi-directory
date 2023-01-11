package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUnderstandTaskQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}