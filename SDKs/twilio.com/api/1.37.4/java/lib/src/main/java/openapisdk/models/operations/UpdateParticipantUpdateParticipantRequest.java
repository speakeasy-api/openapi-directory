package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateParticipantUpdateParticipantRequest {
    @SpeakeasyMetadata("form:name=AnnounceMethod")
    public UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum announceMethod;
    public UpdateParticipantUpdateParticipantRequest withAnnounceMethod(UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum announceMethod) {
        this.announceMethod = announceMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=AnnounceUrl")
    public String announceUrl;
    public UpdateParticipantUpdateParticipantRequest withAnnounceUrl(String announceUrl) {
        this.announceUrl = announceUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=BeepOnExit")
    public Boolean beepOnExit;
    public UpdateParticipantUpdateParticipantRequest withBeepOnExit(Boolean beepOnExit) {
        this.beepOnExit = beepOnExit;
        return this;
    }
    @SpeakeasyMetadata("form:name=CallSidToCoach")
    public String callSidToCoach;
    public UpdateParticipantUpdateParticipantRequest withCallSidToCoach(String callSidToCoach) {
        this.callSidToCoach = callSidToCoach;
        return this;
    }
    @SpeakeasyMetadata("form:name=Coaching")
    public Boolean coaching;
    public UpdateParticipantUpdateParticipantRequest withCoaching(Boolean coaching) {
        this.coaching = coaching;
        return this;
    }
    @SpeakeasyMetadata("form:name=EndConferenceOnExit")
    public Boolean endConferenceOnExit;
    public UpdateParticipantUpdateParticipantRequest withEndConferenceOnExit(Boolean endConferenceOnExit) {
        this.endConferenceOnExit = endConferenceOnExit;
        return this;
    }
    @SpeakeasyMetadata("form:name=Hold")
    public Boolean hold;
    public UpdateParticipantUpdateParticipantRequest withHold(Boolean hold) {
        this.hold = hold;
        return this;
    }
    @SpeakeasyMetadata("form:name=HoldMethod")
    public UpdateParticipantUpdateParticipantRequestHoldMethodEnum holdMethod;
    public UpdateParticipantUpdateParticipantRequest withHoldMethod(UpdateParticipantUpdateParticipantRequestHoldMethodEnum holdMethod) {
        this.holdMethod = holdMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=HoldUrl")
    public String holdUrl;
    public UpdateParticipantUpdateParticipantRequest withHoldUrl(String holdUrl) {
        this.holdUrl = holdUrl;
        return this;
    }
    @SpeakeasyMetadata("form:name=Muted")
    public Boolean muted;
    public UpdateParticipantUpdateParticipantRequest withMuted(Boolean muted) {
        this.muted = muted;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitMethod")
    public UpdateParticipantUpdateParticipantRequestWaitMethodEnum waitMethod;
    public UpdateParticipantUpdateParticipantRequest withWaitMethod(UpdateParticipantUpdateParticipantRequestWaitMethodEnum waitMethod) {
        this.waitMethod = waitMethod;
        return this;
    }
    @SpeakeasyMetadata("form:name=WaitUrl")
    public String waitUrl;
    public UpdateParticipantUpdateParticipantRequest withWaitUrl(String waitUrl) {
        this.waitUrl = waitUrl;
        return this;
    }
}