package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMessageInteractionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListMessageInteractionQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}