package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListRoomRecordingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedAfter")
    public OffsetDateTime dateCreatedAfter;
    public ListRoomRecordingQueryParams withDateCreatedAfter(OffsetDateTime dateCreatedAfter) {
        this.dateCreatedAfter = dateCreatedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedBefore")
    public OffsetDateTime dateCreatedBefore;
    public ListRoomRecordingQueryParams withDateCreatedBefore(OffsetDateTime dateCreatedBefore) {
        this.dateCreatedBefore = dateCreatedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRoomRecordingQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceSid")
    public String sourceSid;
    public ListRoomRecordingQueryParams withSourceSid(String sourceSid) {
        this.sourceSid = sourceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.RoomRecordingEnumStatusEnum status;
    public ListRoomRecordingQueryParams withStatus(openapisdk.models.shared.RoomRecordingEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}