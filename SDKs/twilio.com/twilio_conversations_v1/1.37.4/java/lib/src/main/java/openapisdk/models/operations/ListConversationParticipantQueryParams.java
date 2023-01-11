package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConversationParticipantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConversationParticipantQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}