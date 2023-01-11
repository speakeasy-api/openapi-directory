package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNetworkAccessProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListNetworkAccessProfileQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}