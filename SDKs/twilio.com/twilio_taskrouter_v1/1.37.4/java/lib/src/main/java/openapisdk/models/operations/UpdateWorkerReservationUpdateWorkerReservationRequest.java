package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkerReservationUpdateWorkerReservationRequest {
    @SpeakeasyMetadata("form:name=Beep")
    public String beep;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withBeep(String beep) {
        this.beep = beep;
        return this;
    }
    @SpeakeasyMetadata("form:name=BeepOnCustomerEntrance")
    public Boolean beepOnCustomerEntrance;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withBeepOnCustomerEntrance(Boolean beepOnCustomerEntrance) {
        this.beepOnCustomerEntrance = beepOnCustomerEntrance;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallAccept")
    public Boolean callAccept;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withCallAccept(Boolean callAccept) {
        this.callAccept = callAccept;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallFrom")
    public String callFrom;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withCallFrom(String callFrom) {
        this.callFrom = callFrom;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallRecord")
    public String callRecord;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withCallRecord(String callRecord) {
        this.callRecord = callRecord;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallStatusCallbackUrl")
    public String callStatusCallbackUrl;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withCallStatusCallbackUrl(String callStatusCallbackUrl) {
        this.callStatusCallbackUrl = callStatusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallTimeout")
    public Long callTimeout;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withCallTimeout(Long callTimeout) {
        this.callTimeout = callTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallTo")
    public String callTo;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withCallTo(String callTo) {
        this.callTo = callTo;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallUrl")
    public String callUrl;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withCallUrl(String callUrl) {
        this.callUrl = callUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecord")
    public String conferenceRecord;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withConferenceRecord(String conferenceRecord) {
        this.conferenceRecord = conferenceRecord;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecordingStatusCallback")
    public String conferenceRecordingStatusCallback;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withConferenceRecordingStatusCallback(String conferenceRecordingStatusCallback) {
        this.conferenceRecordingStatusCallback = conferenceRecordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceRecordingStatusCallbackMethod")
    public UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum conferenceRecordingStatusCallbackMethod;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withConferenceRecordingStatusCallbackMethod(UpdateWorkerReservationUpdateWorkerReservationRequestConferenceRecordingStatusCallbackMethodEnum conferenceRecordingStatusCallbackMethod) {
        this.conferenceRecordingStatusCallbackMethod = conferenceRecordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallback")
    public String conferenceStatusCallback;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withConferenceStatusCallback(String conferenceStatusCallback) {
        this.conferenceStatusCallback = conferenceStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallbackEvent")
    public openapisdk.models.shared.WorkerReservationEnumConferenceEventEnum[] conferenceStatusCallbackEvent;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withConferenceStatusCallbackEvent(openapisdk.models.shared.WorkerReservationEnumConferenceEventEnum[] conferenceStatusCallbackEvent) {
        this.conferenceStatusCallbackEvent = conferenceStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceStatusCallbackMethod")
    public UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum conferenceStatusCallbackMethod;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withConferenceStatusCallbackMethod(UpdateWorkerReservationUpdateWorkerReservationRequestConferenceStatusCallbackMethodEnum conferenceStatusCallbackMethod) {
        this.conferenceStatusCallbackMethod = conferenceStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=ConferenceTrim")
    public String conferenceTrim;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withConferenceTrim(String conferenceTrim) {
        this.conferenceTrim = conferenceTrim;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueFrom")
    public String dequeueFrom;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withDequeueFrom(String dequeueFrom) {
        this.dequeueFrom = dequeueFrom;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeuePostWorkActivitySid")
    public String dequeuePostWorkActivitySid;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withDequeuePostWorkActivitySid(String dequeuePostWorkActivitySid) {
        this.dequeuePostWorkActivitySid = dequeuePostWorkActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueRecord")
    public String dequeueRecord;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withDequeueRecord(String dequeueRecord) {
        this.dequeueRecord = dequeueRecord;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueStatusCallbackEvent")
    public String[] dequeueStatusCallbackEvent;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withDequeueStatusCallbackEvent(String[] dequeueStatusCallbackEvent) {
        this.dequeueStatusCallbackEvent = dequeueStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueStatusCallbackUrl")
    public String dequeueStatusCallbackUrl;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withDequeueStatusCallbackUrl(String dequeueStatusCallbackUrl) {
        this.dequeueStatusCallbackUrl = dequeueStatusCallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueTimeout")
    public Long dequeueTimeout;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withDequeueTimeout(Long dequeueTimeout) {
        this.dequeueTimeout = dequeueTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=DequeueTo")
    public String dequeueTo;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withDequeueTo(String dequeueTo) {
        this.dequeueTo = dequeueTo;
        return this;
    }
    @SpeakeasyMetadata("form:name=EarlyMedia")
    public Boolean earlyMedia;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withEarlyMedia(Boolean earlyMedia) {
        this.earlyMedia = earlyMedia;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndConferenceOnCustomerExit")
    public Boolean endConferenceOnCustomerExit;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withEndConferenceOnCustomerExit(Boolean endConferenceOnCustomerExit) {
        this.endConferenceOnCustomerExit = endConferenceOnCustomerExit;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndConferenceOnExit")
    public Boolean endConferenceOnExit;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withEndConferenceOnExit(Boolean endConferenceOnExit) {
        this.endConferenceOnExit = endConferenceOnExit;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=Instruction")
    public String instruction;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withInstruction(String instruction) {
        this.instruction = instruction;
        return this;
    }
    @SpeakeasyMetadata("form:name=MaxParticipants")
    public Long maxParticipants;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withMaxParticipants(Long maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }
    @SpeakeasyMetadata("form:name=Muted")
    public Boolean muted;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withMuted(Boolean muted) {
        this.muted = muted;
        return this;
    }
    @SpeakeasyMetadata("form:name=PostWorkActivitySid")
    public String postWorkActivitySid;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withPostWorkActivitySid(String postWorkActivitySid) {
        this.postWorkActivitySid = postWorkActivitySid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Record")
    public Boolean record;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRecord(Boolean record) {
        this.record = record;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingChannels")
    public String recordingChannels;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRecordingChannels(String recordingChannels) {
        this.recordingChannels = recordingChannels;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallback")
    public String recordingStatusCallback;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRecordingStatusCallback(String recordingStatusCallback) {
        this.recordingStatusCallback = recordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackMethod")
    public UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRecordingStatusCallbackMethod(UpdateWorkerReservationUpdateWorkerReservationRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod) {
        this.recordingStatusCallbackMethod = recordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=RedirectAccept")
    public Boolean redirectAccept;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRedirectAccept(Boolean redirectAccept) {
        this.redirectAccept = redirectAccept;
        return this;
    }
    @SpeakeasyMetadata("form:name=RedirectCallSid")
    public String redirectCallSid;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRedirectCallSid(String redirectCallSid) {
        this.redirectCallSid = redirectCallSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=RedirectUrl")
    public String redirectUrl;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRedirectUrl(String redirectUrl) {
        this.redirectUrl = redirectUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Region")
    public String region;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("form:name=ReservationStatus")
    public openapisdk.models.shared.WorkerReservationEnumStatusEnum reservationStatus;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withReservationStatus(openapisdk.models.shared.WorkerReservationEnumStatusEnum reservationStatus) {
        this.reservationStatus = reservationStatus;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthPassword")
    public String sipAuthPassword;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withSipAuthPassword(String sipAuthPassword) {
        this.sipAuthPassword = sipAuthPassword;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthUsername")
    public String sipAuthUsername;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withSipAuthUsername(String sipAuthUsername) {
        this.sipAuthUsername = sipAuthUsername;
        return this;
    }
    @SpeakeasyMetadata("form:name=StartConferenceOnEnter")
    public Boolean startConferenceOnEnter;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withStartConferenceOnEnter(Boolean startConferenceOnEnter) {
        this.startConferenceOnEnter = startConferenceOnEnter;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackEvent")
    public openapisdk.models.shared.WorkerReservationEnumCallStatusEnum[] statusCallbackEvent;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withStatusCallbackEvent(openapisdk.models.shared.WorkerReservationEnumCallStatusEnum[] statusCallbackEvent) {
        this.statusCallbackEvent = statusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum statusCallbackMethod;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withStatusCallbackMethod(UpdateWorkerReservationUpdateWorkerReservationRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timeout")
    public Long timeout;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitMethod")
    public UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum waitMethod;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withWaitMethod(UpdateWorkerReservationUpdateWorkerReservationRequestWaitMethodEnum waitMethod) {
        this.waitMethod = waitMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitUrl")
    public String waitUrl;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withWaitUrl(String waitUrl) {
        this.waitUrl = waitUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=WorkerActivitySid")
    public String workerActivitySid;
    public UpdateWorkerReservationUpdateWorkerReservationRequest withWorkerActivitySid(String workerActivitySid) {
        this.workerActivitySid = workerActivitySid;
        return this;
    }
}