package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUnderstandModelBuildQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListUnderstandModelBuildQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}