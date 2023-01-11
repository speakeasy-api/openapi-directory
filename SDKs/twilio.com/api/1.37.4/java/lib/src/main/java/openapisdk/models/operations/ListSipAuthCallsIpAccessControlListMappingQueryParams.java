package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipAuthCallsIpAccessControlListMappingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipAuthCallsIpAccessControlListMappingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}