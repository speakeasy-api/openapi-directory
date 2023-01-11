package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSimIpAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSimIpAddressQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}