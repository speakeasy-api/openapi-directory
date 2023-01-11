package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateParticipantCreateParticipantRequest {
    @SpeakeasyMetadata("form:name=AmdStatusCallback")
    public String amdStatusCallback;
    public CreateParticipantCreateParticipantRequest withAmdStatusCallback(String amdStatusCallback) {
        this.amdStatusCallback = amdStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=AmdStatusCallbackMethod")
    public CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum amdStatusCallbackMethod;
    public CreateParticipantCreateParticipantRequest withAmdStatusCallbackMethod(CreateParticipantCreateParticipantRequestAmdStatusCallbackMethodEnum amdStatusCallbackMethod) {
        this.amdStatusCallbackMethod = amdStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Beep")
    public String beep;
    public CreateParticipantCreateParticipantRequest withBeep(String beep) {
        this.beep = beep;
        return this;
    }
    @SpeakeasyMetadata("form:name=Byoc")
    public String byoc;
    public CreateParticipantCreateParticipantRequest withByoc(String byoc) {
        this.byoc = byoc;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallReason")
    public String callReason;
    public CreateParticipantCreateParticipantRequest withCallReason(String callReason) {
        this.callReason = callReason;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallSidToCoach")
    public String callSidToCoach;
    public CreateParticipantCreateParticipantRequest withCallSidToCoach(String callSidToCoach) {
        this.callSidToCoach = callSidToCoach;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallerId")
    public String callerId;
    public CreateParticipantCreateParticipantRequest withCallerId(String callerId) {
        this.callerId = callerId;
        return this;
    }
    @SpeakeasyMetadata("form:name=Coaching")
    public Boolean coaching;
    public CreateParticipantCreateParticipantRequest withCoaching(Boolean coaching) {
        this.coaching = coaching;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecord")
    public String conferenceRecord;
    public CreateParticipantCreateParticipantRequest withConferenceRecord(String conferenceRecord) {
        this.conferenceRecord = conferenceRecord;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecordingStatusCallback")
    public String conferenceRecordingStatusCallback;
    public CreateParticipantCreateParticipantRequest withConferenceRecordingStatusCallback(String conferenceRecordingStatusCallback) {
        this.conferenceRecordingStatusCallback = conferenceRecordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecordingStatusCallbackEvent")
    public String[] conferenceRecordingStatusCallbackEvent;
    public CreateParticipantCreateParticipantRequest withConferenceRecordingStatusCallbackEvent(String[] conferenceRecordingStatusCallbackEvent) {
        this.conferenceRecordingStatusCallbackEvent = conferenceRecordingStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecordingStatusCallbackMethod")
    public CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum conferenceRecordingStatusCallbackMethod;
    public CreateParticipantCreateParticipantRequest withConferenceRecordingStatusCallbackMethod(CreateParticipantCreateParticipantRequestConferenceRecordingStatusCallbackMethodEnum conferenceRecordingStatusCallbackMethod) {
        this.conferenceRecordingStatusCallbackMethod = conferenceRecordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallback")
    public String conferenceStatusCallback;
    public CreateParticipantCreateParticipantRequest withConferenceStatusCallback(String conferenceStatusCallback) {
        this.conferenceStatusCallback = conferenceStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallbackEvent")
    public String[] conferenceStatusCallbackEvent;
    public CreateParticipantCreateParticipantRequest withConferenceStatusCallbackEvent(String[] conferenceStatusCallbackEvent) {
        this.conferenceStatusCallbackEvent = conferenceStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallbackMethod")
    public CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum conferenceStatusCallbackMethod;
    public CreateParticipantCreateParticipantRequest withConferenceStatusCallbackMethod(CreateParticipantCreateParticipantRequestConferenceStatusCallbackMethodEnum conferenceStatusCallbackMethod) {
        this.conferenceStatusCallbackMethod = conferenceStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceTrim")
    public String conferenceTrim;
    public CreateParticipantCreateParticipantRequest withConferenceTrim(String conferenceTrim) {
        this.conferenceTrim = conferenceTrim;
        return this;
    }
    @SpeakeasyMetadata("form:name=EarlyMedia")
    public Boolean earlyMedia;
    public CreateParticipantCreateParticipantRequest withEarlyMedia(Boolean earlyMedia) {
        this.earlyMedia = earlyMedia;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndConferenceOnExit")
    public Boolean endConferenceOnExit;
    public CreateParticipantCreateParticipantRequest withEndConferenceOnExit(Boolean endConferenceOnExit) {
        this.endConferenceOnExit = endConferenceOnExit;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public CreateParticipantCreateParticipantRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=JitterBufferSize")
    public String jitterBufferSize;
    public CreateParticipantCreateParticipantRequest withJitterBufferSize(String jitterBufferSize) {
        this.jitterBufferSize = jitterBufferSize;
        return this;
    }
    @SpeakeasyMetadata("form:name=Label")
    public String label;
    public CreateParticipantCreateParticipantRequest withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetection")
    public String machineDetection;
    public CreateParticipantCreateParticipantRequest withMachineDetection(String machineDetection) {
        this.machineDetection = machineDetection;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionSilenceTimeout")
    public Long machineDetectionSilenceTimeout;
    public CreateParticipantCreateParticipantRequest withMachineDetectionSilenceTimeout(Long machineDetectionSilenceTimeout) {
        this.machineDetectionSilenceTimeout = machineDetectionSilenceTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionSpeechEndThreshold")
    public Long machineDetectionSpeechEndThreshold;
    public CreateParticipantCreateParticipantRequest withMachineDetectionSpeechEndThreshold(Long machineDetectionSpeechEndThreshold) {
        this.machineDetectionSpeechEndThreshold = machineDetectionSpeechEndThreshold;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionSpeechThreshold")
    public Long machineDetectionSpeechThreshold;
    public CreateParticipantCreateParticipantRequest withMachineDetectionSpeechThreshold(Long machineDetectionSpeechThreshold) {
        this.machineDetectionSpeechThreshold = machineDetectionSpeechThreshold;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionTimeout")
    public Long machineDetectionTimeout;
    public CreateParticipantCreateParticipantRequest withMachineDetectionTimeout(Long machineDetectionTimeout) {
        this.machineDetectionTimeout = machineDetectionTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxParticipants")
    public Long maxParticipants;
    public CreateParticipantCreateParticipantRequest withMaxParticipants(Long maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }
    @SpeakeasyMetadata("form:name=Muted")
    public Boolean muted;
    public CreateParticipantCreateParticipantRequest withMuted(Boolean muted) {
        this.muted = muted;
        return this;
    }
    @SpeakeasyMetadata("form:name=Record")
    public Boolean record;
    public CreateParticipantCreateParticipantRequest withRecord(Boolean record) {
        this.record = record;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingChannels")
    public String recordingChannels;
    public CreateParticipantCreateParticipantRequest withRecordingChannels(String recordingChannels) {
        this.recordingChannels = recordingChannels;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallback")
    public String recordingStatusCallback;
    public CreateParticipantCreateParticipantRequest withRecordingStatusCallback(String recordingStatusCallback) {
        this.recordingStatusCallback = recordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackEvent")
    public String[] recordingStatusCallbackEvent;
    public CreateParticipantCreateParticipantRequest withRecordingStatusCallbackEvent(String[] recordingStatusCallbackEvent) {
        this.recordingStatusCallbackEvent = recordingStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackMethod")
    public CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod;
    public CreateParticipantCreateParticipantRequest withRecordingStatusCallbackMethod(CreateParticipantCreateParticipantRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod) {
        this.recordingStatusCallbackMethod = recordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingTrack")
    public String recordingTrack;
    public CreateParticipantCreateParticipantRequest withRecordingTrack(String recordingTrack) {
        this.recordingTrack = recordingTrack;
        return this;
    }
    @SpeakeasyMetadata("form:name=Region")
    public String region;
    public CreateParticipantCreateParticipantRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthPassword")
    public String sipAuthPassword;
    public CreateParticipantCreateParticipantRequest withSipAuthPassword(String sipAuthPassword) {
        this.sipAuthPassword = sipAuthPassword;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthUsername")
    public String sipAuthUsername;
    public CreateParticipantCreateParticipantRequest withSipAuthUsername(String sipAuthUsername) {
        this.sipAuthUsername = sipAuthUsername;
        return this;
    }
    @SpeakeasyMetadata("form:name=StartConferenceOnEnter")
    public Boolean startConferenceOnEnter;
    public CreateParticipantCreateParticipantRequest withStartConferenceOnEnter(Boolean startConferenceOnEnter) {
        this.startConferenceOnEnter = startConferenceOnEnter;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateParticipantCreateParticipantRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackEvent")
    public String[] statusCallbackEvent;
    public CreateParticipantCreateParticipantRequest withStatusCallbackEvent(String[] statusCallbackEvent) {
        this.statusCallbackEvent = statusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateParticipantCreateParticipantRequest withStatusCallbackMethod(CreateParticipantCreateParticipantRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TimeLimit")
    public Long timeLimit;
    public CreateParticipantCreateParticipantRequest withTimeLimit(Long timeLimit) {
        this.timeLimit = timeLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timeout")
    public Long timeout;
    public CreateParticipantCreateParticipantRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public CreateParticipantCreateParticipantRequest withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitMethod")
    public CreateParticipantCreateParticipantRequestWaitMethodEnum waitMethod;
    public CreateParticipantCreateParticipantRequest withWaitMethod(CreateParticipantCreateParticipantRequestWaitMethodEnum waitMethod) {
        this.waitMethod = waitMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitUrl")
    public String waitUrl;
    public CreateParticipantCreateParticipantRequest withWaitUrl(String waitUrl) {
        this.waitUrl = waitUrl;
        return this;
    }
}