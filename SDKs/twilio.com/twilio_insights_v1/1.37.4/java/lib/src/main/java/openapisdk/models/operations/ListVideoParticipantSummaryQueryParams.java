package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVideoParticipantSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListVideoParticipantSummaryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}