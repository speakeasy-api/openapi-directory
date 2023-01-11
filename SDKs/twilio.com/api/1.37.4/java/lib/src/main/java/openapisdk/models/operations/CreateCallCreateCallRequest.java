package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallCreateCallRequest {
    @SpeakeasyMetadata("form:name=ApplicationSid")
    public String applicationSid;
    public CreateCallCreateCallRequest withApplicationSid(String applicationSid) {
        this.applicationSid = applicationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=AsyncAmd")
    public String asyncAmd;
    public CreateCallCreateCallRequest withAsyncAmd(String asyncAmd) {
        this.asyncAmd = asyncAmd;
        return this;
    }
    @SpeakeasyMetadata("form:name=AsyncAmdStatusCallback")
    public String asyncAmdStatusCallback;
    public CreateCallCreateCallRequest withAsyncAmdStatusCallback(String asyncAmdStatusCallback) {
        this.asyncAmdStatusCallback = asyncAmdStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=AsyncAmdStatusCallbackMethod")
    public CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum asyncAmdStatusCallbackMethod;
    public CreateCallCreateCallRequest withAsyncAmdStatusCallbackMethod(CreateCallCreateCallRequestAsyncAmdStatusCallbackMethodEnum asyncAmdStatusCallbackMethod) {
        this.asyncAmdStatusCallbackMethod = asyncAmdStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=Byoc")
    public String byoc;
    public CreateCallCreateCallRequest withByoc(String byoc) {
        this.byoc = byoc;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallReason")
    public String callReason;
    public CreateCallCreateCallRequest withCallReason(String callReason) {
        this.callReason = callReason;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallToken")
    public String callToken;
    public CreateCallCreateCallRequest withCallToken(String callToken) {
        this.callToken = callToken;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallerId")
    public String callerId;
    public CreateCallCreateCallRequest withCallerId(String callerId) {
        this.callerId = callerId;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackMethod")
    public CreateCallCreateCallRequestFallbackMethodEnum fallbackMethod;
    public CreateCallCreateCallRequest withFallbackMethod(CreateCallCreateCallRequestFallbackMethodEnum fallbackMethod) {
        this.fallbackMethod = fallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=FallbackUrl")
    public String fallbackUrl;
    public CreateCallCreateCallRequest withFallbackUrl(String fallbackUrl) {
        this.fallbackUrl = fallbackUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=From")
    public String from;
    public CreateCallCreateCallRequest withFrom(String from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetection")
    public String machineDetection;
    public CreateCallCreateCallRequest withMachineDetection(String machineDetection) {
        this.machineDetection = machineDetection;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionSilenceTimeout")
    public Long machineDetectionSilenceTimeout;
    public CreateCallCreateCallRequest withMachineDetectionSilenceTimeout(Long machineDetectionSilenceTimeout) {
        this.machineDetectionSilenceTimeout = machineDetectionSilenceTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionSpeechEndThreshold")
    public Long machineDetectionSpeechEndThreshold;
    public CreateCallCreateCallRequest withMachineDetectionSpeechEndThreshold(Long machineDetectionSpeechEndThreshold) {
        this.machineDetectionSpeechEndThreshold = machineDetectionSpeechEndThreshold;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionSpeechThreshold")
    public Long machineDetectionSpeechThreshold;
    public CreateCallCreateCallRequest withMachineDetectionSpeechThreshold(Long machineDetectionSpeechThreshold) {
        this.machineDetectionSpeechThreshold = machineDetectionSpeechThreshold;
        return this;
    }
    @SpeakeasyMetadata("form:name=MachineDetectionTimeout")
    public Long machineDetectionTimeout;
    public CreateCallCreateCallRequest withMachineDetectionTimeout(Long machineDetectionTimeout) {
        this.machineDetectionTimeout = machineDetectionTimeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=Method")
    public CreateCallCreateCallRequestMethodEnum method;
    public CreateCallCreateCallRequest withMethod(CreateCallCreateCallRequestMethodEnum method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("form:name=Record")
    public Boolean record;
    public CreateCallCreateCallRequest withRecord(Boolean record) {
        this.record = record;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingChannels")
    public String recordingChannels;
    public CreateCallCreateCallRequest withRecordingChannels(String recordingChannels) {
        this.recordingChannels = recordingChannels;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallback")
    public String recordingStatusCallback;
    public CreateCallCreateCallRequest withRecordingStatusCallback(String recordingStatusCallback) {
        this.recordingStatusCallback = recordingStatusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackEvent")
    public String[] recordingStatusCallbackEvent;
    public CreateCallCreateCallRequest withRecordingStatusCallbackEvent(String[] recordingStatusCallbackEvent) {
        this.recordingStatusCallbackEvent = recordingStatusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingStatusCallbackMethod")
    public CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod;
    public CreateCallCreateCallRequest withRecordingStatusCallbackMethod(CreateCallCreateCallRequestRecordingStatusCallbackMethodEnum recordingStatusCallbackMethod) {
        this.recordingStatusCallbackMethod = recordingStatusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=RecordingTrack")
    public String recordingTrack;
    public CreateCallCreateCallRequest withRecordingTrack(String recordingTrack) {
        this.recordingTrack = recordingTrack;
        return this;
    }
    @SpeakeasyMetadata("form:name=SendDigits")
    public String sendDigits;
    public CreateCallCreateCallRequest withSendDigits(String sendDigits) {
        this.sendDigits = sendDigits;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthPassword")
    public String sipAuthPassword;
    public CreateCallCreateCallRequest withSipAuthPassword(String sipAuthPassword) {
        this.sipAuthPassword = sipAuthPassword;
        return this;
    }
    @SpeakeasyMetadata("form:name=SipAuthUsername")
    public String sipAuthUsername;
    public CreateCallCreateCallRequest withSipAuthUsername(String sipAuthUsername) {
        this.sipAuthUsername = sipAuthUsername;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallback")
    public String statusCallback;
    public CreateCallCreateCallRequest withStatusCallback(String statusCallback) {
        this.statusCallback = statusCallback;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackEvent")
    public String[] statusCallbackEvent;
    public CreateCallCreateCallRequest withStatusCallbackEvent(String[] statusCallbackEvent) {
        this.statusCallbackEvent = statusCallbackEvent;
        return this;
    }
    @SpeakeasyMetadata("form:name=StatusCallbackMethod")
    public CreateCallCreateCallRequestStatusCallbackMethodEnum statusCallbackMethod;
    public CreateCallCreateCallRequest withStatusCallbackMethod(CreateCallCreateCallRequestStatusCallbackMethodEnum statusCallbackMethod) {
        this.statusCallbackMethod = statusCallbackMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=TimeLimit")
    public Long timeLimit;
    public CreateCallCreateCallRequest withTimeLimit(Long timeLimit) {
        this.timeLimit = timeLimit;
        return this;
    }
    @SpeakeasyMetadata("form:name=Timeout")
    public Long timeout;
    public CreateCallCreateCallRequest withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=To")
    public String to;
    public CreateCallCreateCallRequest withTo(String to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("form:name=Trim")
    public String trim;
    public CreateCallCreateCallRequest withTrim(String trim) {
        this.trim = trim;
        return this;
    }
    @SpeakeasyMetadata("form:name=Twiml")
    public String twiml;
    public CreateCallCreateCallRequest withTwiml(String twiml) {
        this.twiml = twiml;
        return this;
    }
    @SpeakeasyMetadata("form:name=Url")
    public String url;
    public CreateCallCreateCallRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}