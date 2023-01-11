package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListVideoRoomSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Codec")
    public openapisdk.models.shared.VideoRoomSummaryEnumCodecEnum[] codec;
    public ListVideoRoomSummaryQueryParams withCodec(openapisdk.models.shared.VideoRoomSummaryEnumCodecEnum[] codec) {
        this.codec = codec;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CreatedAfter")
    public OffsetDateTime createdAfter;
    public ListVideoRoomSummaryQueryParams withCreatedAfter(OffsetDateTime createdAfter) {
        this.createdAfter = createdAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CreatedBefore")
    public OffsetDateTime createdBefore;
    public ListVideoRoomSummaryQueryParams withCreatedBefore(OffsetDateTime createdBefore) {
        this.createdBefore = createdBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListVideoRoomSummaryQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoomName")
    public String roomName;
    public ListVideoRoomSummaryQueryParams withRoomName(String roomName) {
        this.roomName = roomName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoomType")
    public openapisdk.models.shared.VideoRoomSummaryEnumRoomTypeEnum[] roomType;
    public ListVideoRoomSummaryQueryParams withRoomType(openapisdk.models.shared.VideoRoomSummaryEnumRoomTypeEnum[] roomType) {
        this.roomType = roomType;
        return this;
    }
}