package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoomParticipantPublishedTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRoomParticipantPublishedTrackQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}