package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoomParticipantSubscribedTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRoomParticipantSubscribedTrackQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}