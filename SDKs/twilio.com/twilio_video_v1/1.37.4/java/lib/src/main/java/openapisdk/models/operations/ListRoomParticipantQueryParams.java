package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListRoomParticipantQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedAfter")
    public OffsetDateTime dateCreatedAfter;
    public ListRoomParticipantQueryParams withDateCreatedAfter(OffsetDateTime dateCreatedAfter) {
        this.dateCreatedAfter = dateCreatedAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreatedBefore")
    public OffsetDateTime dateCreatedBefore;
    public ListRoomParticipantQueryParams withDateCreatedBefore(OffsetDateTime dateCreatedBefore) {
        this.dateCreatedBefore = dateCreatedBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public ListRoomParticipantQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListRoomParticipantQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.RoomParticipantEnumStatusEnum status;
    public ListRoomParticipantQueryParams withStatus(openapisdk.models.shared.RoomParticipantEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}