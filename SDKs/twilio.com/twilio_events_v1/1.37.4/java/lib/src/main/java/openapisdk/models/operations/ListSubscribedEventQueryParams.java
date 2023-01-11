package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSubscribedEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListSubscribedEventQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}