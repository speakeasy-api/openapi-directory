package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSipIpAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSipIpAddressQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}