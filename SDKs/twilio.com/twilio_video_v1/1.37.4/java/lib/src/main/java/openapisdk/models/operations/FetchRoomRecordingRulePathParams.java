package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchRoomRecordingRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=RoomSid")
    public String roomSid;
    public FetchRoomRecordingRulePathParams withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
}