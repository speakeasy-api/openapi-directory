package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceIpMappingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSourceIpMappingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}