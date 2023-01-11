package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFaxMediaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListFaxMediaQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}