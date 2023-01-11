package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuildQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListBuildQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}