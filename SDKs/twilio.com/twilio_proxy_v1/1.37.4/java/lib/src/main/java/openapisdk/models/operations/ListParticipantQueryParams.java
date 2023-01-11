package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListParticipantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListParticipantQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}