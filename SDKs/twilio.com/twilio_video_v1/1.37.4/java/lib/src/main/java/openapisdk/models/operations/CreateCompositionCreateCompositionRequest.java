package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCompositionCreateCompositionRequest {
    @SpeakeasyMetadata("form:name=AudioSources")
    public String[] audioSources;
    public CreateCompositionCreateCompositionRequest withAudioSources(String[] audioSources) {
        this.audioSources = audioSources;
        return this;
    }
    @SpeakeasyMetadata("form:name=AudioSourcesExcluded")
    public String[] audioSourcesExcluded;
    public CreateCompositionCreateCompositionRequest withAudioSourcesExcluded(String[] audioSourcesExcluded) {
        this.audioSourcesExcluded = audioSourcesExcluded;
        return this;
    }
    @SpeakeasyMetadata("form:name=Format")
    public openapisdk.models.shared.CompositionEnumFormatEnum format;
    public CreateCompositionCreateCompositionRequest withFormat(openapisdk.models.shared.CompositionEnumFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("form:name=Resolution")
    public String resolution;
    public CreateCompositionCreateCompositionRequest withResolution(String resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("form:name=RoomSid")
    public String roomSid;
    public CreateCompositionCreateCompositionRequest withRoomSid(String roomSid) {
        this.roomSid = roomSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateCompositionCreateCompositionRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateCompositionCreateCompositionRequest withStatusCallbackMethod(CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Trim")
    public Boolean trim;
    public CreateCompositionCreateCompositionRequest withTrim(Boolean trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("form:name=VideoLayout")
    public Object videoLayout;
    public CreateCompositionCreateCompositionRequest withVideoLayout(Object videoLayout) {
        this.videoLayout = videoLayout;
        return this;
    }
}