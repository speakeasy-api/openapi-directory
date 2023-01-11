package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipIpAccessControlListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipIpAccessControlListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}