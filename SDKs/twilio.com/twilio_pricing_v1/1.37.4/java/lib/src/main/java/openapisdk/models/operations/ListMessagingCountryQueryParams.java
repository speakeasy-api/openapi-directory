package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMessagingCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMessagingCountryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}