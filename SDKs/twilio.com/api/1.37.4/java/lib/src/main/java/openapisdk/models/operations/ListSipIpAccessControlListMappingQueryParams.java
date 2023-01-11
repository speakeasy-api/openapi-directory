package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipIpAccessControlListMappingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipIpAccessControlListMappingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}