package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallRecordingCreateCallRecordingRequest {
    @SpeakeasyMetadata("form:name=RecordingChannels")
    public String recordingChannels;
    public CreateCallRecordingCreateCallRecordingRequest withRecordingChannels(String recordingChannels) {
        this.recordingChannels = recordingChannels;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallback")
    public String recordingStatusCallback;
    public CreateCallRecordingCreateCallRecordingRequest withRecordingStatusCallback(String recordingStatusCallback) {
        this.recordingStatusCallback = recordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackEvent")
    public String[] recordingStatusCallbackEvent;
    public CreateCallRecordingCreateCallRecordingRequest withRecordingStatusCallbackEvent(String[] recordingStatusCallbackEvent) {
        this.recordingStatusCallbackEvent = recordingStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackMethod")
    public CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod;
    public CreateCallRecordingCreateCallRecordingRequest withRecordingStatusCallbackMethod(CreateCallRecordingCreateCallRecordingRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod) {
        this.recordingStatusCallbackMethod = recordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingTrack")
    public String recordingTrack;
    public CreateCallRecordingCreateCallRecordingRequest withRecordingTrack(String recordingTrack) {
        this.recordingTrack = recordingTrack;
        return this;
    }
    @SpeakeasyMetadata("form:name=Trim")
    public String trim;
    public CreateCallRecordingCreateCallRecordingRequest withTrim(String trim) {
        this.trim = trim;
        return this;
    }
}