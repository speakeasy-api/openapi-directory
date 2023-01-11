package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListModelBuildQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListModelBuildQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}