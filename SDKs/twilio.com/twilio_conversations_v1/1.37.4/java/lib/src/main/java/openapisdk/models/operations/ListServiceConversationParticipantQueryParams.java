package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServiceConversationParticipantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListServiceConversationParticipantQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}