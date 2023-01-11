package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceUserQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}