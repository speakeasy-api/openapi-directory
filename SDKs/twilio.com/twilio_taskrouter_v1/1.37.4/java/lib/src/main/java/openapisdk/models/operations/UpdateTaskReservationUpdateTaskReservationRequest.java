package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskReservationUpdateTaskReservationRequest {
    @SpeakeasyMetadata("form:name=Beep")
    public String beep;
    public UpdateTaskReservationUpdateTaskReservationRequest withBeep(String beep) {
        this.beep = beep;
        return this;
    }
    @SpeakeasyMetadata("form:name=BeepOnCustomerEntrance")
    public Boolean beepOnCustomerEntrance;
    public UpdateTaskReservationUpdateTaskReservationRequest withBeepOnCustomerEntrance(Boolean beepOnCustomerEntrance) {
        this.beepOnCustomerEntrance = beepOnCustomerEntrance;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallAccept")
    public Boolean callAccept;
    public UpdateTaskReservationUpdateTaskReservationRequest withCallAccept(Boolean callAccept) {
        this.callAccept = callAccept;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallFrom")
    public String callFrom;
    public UpdateTaskReservationUpdateTaskReservationRequest withCallFrom(String callFrom) {
        this.callFrom = callFrom;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallRecord")
    public String callRecord;
    public UpdateTaskReservationUpdateTaskReservationRequest withCallRecord(String callRecord) {
        this.callRecord = callRecord;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallStatusCallbackUrl")
    public String callStatusCallbackUrl;
    public UpdateTaskReservationUpdateTaskReservationRequest withCallStatusCallbackUrl(String callStatusCallbackUrl) {
        this.callStatusCallbackUrl = callStatusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallTimeout")
    public Long callTimeout;
    public UpdateTaskReservationUpdateTaskReservationRequest withCallTimeout(Long callTimeout) {
        this.callTimeout = callTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallTo")
    public String callTo;
    public UpdateTaskReservationUpdateTaskReservationRequest withCallTo(String callTo) {
        this.callTo = callTo;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallUrl")
    public String callUrl;
    public UpdateTaskReservationUpdateTaskReservationRequest withCallUrl(String callUrl) {
        this.callUrl = callUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecord")
    public String conferenceRecord;
    public UpdateTaskReservationUpdateTaskReservationRequest withConferenceRecord(String conferenceRecord) {
        this.conferenceRecord = conferenceRecord;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecordingStatusCallback")
    public String conferenceRecordingStatusCallback;
    public UpdateTaskReservationUpdateTaskReservationRequest withConferenceRecordingStatusCallback(String conferenceRecordingStatusCallback) {
        this.conferenceRecordingStatusCallback = conferenceRecordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecordingStatusCallbackMethod")
    public UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum conferenceRecordingStatusCallbackMethod;
    public UpdateTaskReservationUpdateTaskReservationRequest withConferenceRecordingStatusCallbackMethod(UpdateTaskReservationUpdateTaskReservationRequestConferenceRecordingStatusCallbackMethodEnum conferenceRecordingStatusCallbackMethod) {
        this.conferenceRecordingStatusCallbackMethod = conferenceRecordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallback")
    public String conferenceStatusCallback;
    public UpdateTaskReservationUpdateTaskReservationRequest withConferenceStatusCallback(String conferenceStatusCallback) {
        this.conferenceStatusCallback = conferenceStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallbackEvent")
    public openapisdk.models.shared.TaskReservationEnumConferenceEventEnum[] conferenceStatusCallbackEvent;
    public UpdateTaskReservationUpdateTaskReservationRequest withConferenceStatusCallbackEvent(openapisdk.models.shared.TaskReservationEnumConferenceEventEnum[] conferenceStatusCallbackEvent) {
        this.conferenceStatusCallbackEvent = conferenceStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallbackMethod")
    public UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum conferenceStatusCallbackMethod;
    public UpdateTaskReservationUpdateTaskReservationRequest withConferenceStatusCallbackMethod(UpdateTaskReservationUpdateTaskReservationRequestConferenceStatusCallbackMethodEnum conferenceStatusCallbackMethod) {
        this.conferenceStatusCallbackMethod = conferenceStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceTrim")
    public String conferenceTrim;
    public UpdateTaskReservationUpdateTaskReservationRequest withConferenceTrim(String conferenceTrim) {
        this.conferenceTrim = conferenceTrim;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueFrom")
    public String dequeueFrom;
    public UpdateTaskReservationUpdateTaskReservationRequest withDequeueFrom(String dequeueFrom) {
        this.dequeueFrom = dequeueFrom;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeuePostWorkActivitySid")
    public String dequeuePostWorkActivitySid;
    public UpdateTaskReservationUpdateTaskReservationRequest withDequeuePostWorkActivitySid(String dequeuePostWorkActivitySid) {
        this.dequeuePostWorkActivitySid = dequeuePostWorkActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueRecord")
    public String dequeueRecord;
    public UpdateTaskReservationUpdateTaskReservationRequest withDequeueRecord(String dequeueRecord) {
        this.dequeueRecord = dequeueRecord;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueStatusCallbackEvent")
    public String[] dequeueStatusCallbackEvent;
    public UpdateTaskReservationUpdateTaskReservationRequest withDequeueStatusCallbackEvent(String[] dequeueStatusCallbackEvent) {
        this.dequeueStatusCallbackEvent = dequeueStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueStatusCallbackUrl")
    public String dequeueStatusCallbackUrl;
    public UpdateTaskReservationUpdateTaskReservationRequest withDequeueStatusCallbackUrl(String dequeueStatusCallbackUrl) {
        this.dequeueStatusCallbackUrl = dequeueStatusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueTimeout")
    public Long dequeueTimeout;
    public UpdateTaskReservationUpdateTaskReservationRequest withDequeueTimeout(Long dequeueTimeout) {
        this.dequeueTimeout = dequeueTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueTo")
    public String dequeueTo;
    public UpdateTaskReservationUpdateTaskReservationRequest withDequeueTo(String dequeueTo) {
        this.dequeueTo = dequeueTo;
        return this;
    }
    @SpeakeasyMetadata("form:name=EarlyMedia")
    public Boolean earlyMedia;
    public UpdateTaskReservationUpdateTaskReservationRequest withEarlyMedia(Boolean earlyMedia) {
        this.earlyMedia = earlyMedia;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndConferenceOnCustomerExit")
    public Boolean endConferenceOnCustomerExit;
    public UpdateTaskReservationUpdateTaskReservationRequest withEndConferenceOnCustomerExit(Boolean endConferenceOnCustomerExit) {
        this.endConferenceOnCustomerExit = endConferenceOnCustomerExit;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndConferenceOnExit")
    public Boolean endConferenceOnExit;
    public UpdateTaskReservationUpdateTaskReservationRequest withEndConferenceOnExit(Boolean endConferenceOnExit) {
        this.endConferenceOnExit = endConferenceOnExit;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public UpdateTaskReservationUpdateTaskReservationRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=Instruction")
    public String instruction;
    public UpdateTaskReservationUpdateTaskReservationRequest withInstruction(String instruction) {
        this.instruction = instruction;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxParticipants")
    public Long maxParticipants;
    public UpdateTaskReservationUpdateTaskReservationRequest withMaxParticipants(Long maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }
    @SpeakeasyMetadata("form:name=Muted")
    public Boolean muted;
    public UpdateTaskReservationUpdateTaskReservationRequest withMuted(Boolean muted) {
        this.muted = muted;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostWorkActivitySid")
    public String postWorkActivitySid;
    public UpdateTaskReservationUpdateTaskReservationRequest withPostWorkActivitySid(String postWorkActivitySid) {
        this.postWorkActivitySid = postWorkActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Record")
    public Boolean record;
    public UpdateTaskReservationUpdateTaskReservationRequest withRecord(Boolean record) {
        this.record = record;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingChannels")
    public String recordingChannels;
    public UpdateTaskReservationUpdateTaskReservationRequest withRecordingChannels(String recordingChannels) {
        this.recordingChannels = recordingChannels;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallback")
    public String recordingStatusCallback;
    public UpdateTaskReservationUpdateTaskReservationRequest withRecordingStatusCallback(String recordingStatusCallback) {
        this.recordingStatusCallback = recordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackMethod")
    public UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod;
    public UpdateTaskReservationUpdateTaskReservationRequest withRecordingStatusCallbackMethod(UpdateTaskReservationUpdateTaskReservationRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod) {
        this.recordingStatusCallbackMethod = recordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=RedirectAccept")
    public Boolean redirectAccept;
    public UpdateTaskReservationUpdateTaskReservationRequest withRedirectAccept(Boolean redirectAccept) {
        this.redirectAccept = redirectAccept;
        return this;
    }
    @SpeakeasyMetadata("form:name=RedirectCallSid")
    public String redirectCallSid;
    public UpdateTaskReservationUpdateTaskReservationRequest withRedirectCallSid(String redirectCallSid) {
        this.redirectCallSid = redirectCallSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=RedirectUrl")
    public String redirectUrl;
    public UpdateTaskReservationUpdateTaskReservationRequest withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Region")
    public String region;
    public UpdateTaskReservationUpdateTaskReservationRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReservationStatus")
    public openapisdk.models.shared.TaskReservationEnumStatusEnum reservationStatus;
    public UpdateTaskReservationUpdateTaskReservationRequest withReservationStatus(openapisdk.models.shared.TaskReservationEnumStatusEnum reservationStatus) {
        this.reservationStatus = reservationStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthPassword")
    public String sipAuthPassword;
    public UpdateTaskReservationUpdateTaskReservationRequest withSipAuthPassword(String sipAuthPassword) {
        this.sipAuthPassword = sipAuthPassword;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthUsername")
    public String sipAuthUsername;
    public UpdateTaskReservationUpdateTaskReservationRequest withSipAuthUsername(String sipAuthUsername) {
        this.sipAuthUsername = sipAuthUsername;
        return this;
    }
    @SpeakeasyMetadata("form:name=StartConferenceOnEnter")
    public Boolean startConferenceOnEnter;
    public UpdateTaskReservationUpdateTaskReservationRequest withStartConferenceOnEnter(Boolean startConferenceOnEnter) {
        this.startConferenceOnEnter = startConferenceOnEnter;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateTaskReservationUpdateTaskReservationRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackEvent")
    public openapisdk.models.shared.TaskReservationEnumCallStatusEnum[] statusCallbackEvent;
    public UpdateTaskReservationUpdateTaskReservationRequest withStatusCallbackEvent(openapisdk.models.shared.TaskReservationEnumCallStatusEnum[] statusCallbackEvent) {
        this.statusCallbackEvent = statusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum statusCallbackMethod;
    public UpdateTaskReservationUpdateTaskReservationRequest withStatusCallbackMethod(UpdateTaskReservationUpdateTaskReservationRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Supervisor")
    public String supervisor;
    public UpdateTaskReservationUpdateTaskReservationRequest withSupervisor(String supervisor) {
        this.supervisor = supervisor;
        return this;
    }
    @SpeakeasyMetadata("form:name=SupervisorMode")
    public openapisdk.models.shared.TaskReservationEnumSupervisorModeEnum supervisorMode;
    public UpdateTaskReservationUpdateTaskReservationRequest withSupervisorMode(openapisdk.models.shared.TaskReservationEnumSupervisorModeEnum supervisorMode) {
        this.supervisorMode = supervisorMode;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timeout")
    public Long timeout;
    public UpdateTaskReservationUpdateTaskReservationRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public UpdateTaskReservationUpdateTaskReservationRequest withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitMethod")
    public UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum waitMethod;
    public UpdateTaskReservationUpdateTaskReservationRequest withWaitMethod(UpdateTaskReservationUpdateTaskReservationRequestWaitMethodEnum waitMethod) {
        this.waitMethod = waitMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitUrl")
    public String waitUrl;
    public UpdateTaskReservationUpdateTaskReservationRequest withWaitUrl(String waitUrl) {
        this.waitUrl = waitUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=WorkerActivitySid")
    public String workerActivitySid;
    public UpdateTaskReservationUpdateTaskReservationRequest withWorkerActivitySid(String workerActivitySid) {
        this.workerActivitySid = workerActivitySid;
        return this;
    }
}