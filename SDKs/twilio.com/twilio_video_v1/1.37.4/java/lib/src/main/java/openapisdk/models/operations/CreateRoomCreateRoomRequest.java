package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoomCreateRoomRequest {
    @SpeakeasyMetadata("form:name=AudioOnly")
    public Boolean audioOnly;
    public CreateRoomCreateRoomRequest withAudioOnly(Boolean audioOnly) {
        this.audioOnly = audioOnly;
        return this;
    }
    @SpeakeasyMetadata("form:name=EmptyRoomTimeout")
    public Long emptyRoomTimeout;
    public CreateRoomCreateRoomRequest withEmptyRoomTimeout(Long emptyRoomTimeout) {
        this.emptyRoomTimeout = emptyRoomTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=EnableTurn")
    public Boolean enableTurn;
    public CreateRoomCreateRoomRequest withEnableTurn(Boolean enableTurn) {
        this.enableTurn = enableTurn;
        return this;
    }
    @SpeakeasyMetadata("form:name=LargeRoom")
    public Boolean largeRoom;
    public CreateRoomCreateRoomRequest withLargeRoom(Boolean largeRoom) {
        this.largeRoom = largeRoom;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxParticipantDuration")
    public Long maxParticipantDuration;
    public CreateRoomCreateRoomRequest withMaxParticipantDuration(Long maxParticipantDuration) {
        this.maxParticipantDuration = maxParticipantDuration;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxParticipants")
    public Long maxParticipants;
    public CreateRoomCreateRoomRequest withMaxParticipants(Long maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }
    @SpeakeasyMetadata("form:name=MediaRegion")
    public String mediaRegion;
    public CreateRoomCreateRoomRequest withMediaRegion(String mediaRegion) {
        this.mediaRegion = mediaRegion;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordParticipantsOnConnect")
    public Boolean recordParticipantsOnConnect;
    public CreateRoomCreateRoomRequest withRecordParticipantsOnConnect(Boolean recordParticipantsOnConnect) {
        this.recordParticipantsOnConnect = recordParticipantsOnConnect;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingRules")
    public Object recordingRules;
    public CreateRoomCreateRoomRequest withRecordingRules(Object recordingRules) {
        this.recordingRules = recordingRules;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateRoomCreateRoomRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateRoomCreateRoomRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateRoomCreateRoomRequest withStatusCallbackMethod(CreateRoomCreateRoomRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Type")
    public openapisdk.models.shared.RoomEnumRoomTypeEnum type;
    public CreateRoomCreateRoomRequest withType(openapisdk.models.shared.RoomEnumRoomTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateRoomCreateRoomRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
    @SpeakeasyMetadata("form:name=UnusedRoomTimeout")
    public Long unusedRoomTimeout;
    public CreateRoomCreateRoomRequest withUnusedRoomTimeout(Long unusedRoomTimeout) {
        this.unusedRoomTimeout = unusedRoomTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=VideoCodecs")
    public openapisdk.models.shared.RoomEnumVideoCodecEnum[] videoCodecs;
    public CreateRoomCreateRoomRequest withVideoCodecs(openapisdk.models.shared.RoomEnumVideoCodecEnum[] videoCodecs) {
        this.videoCodecs = videoCodecs;
        return this;
    }
}