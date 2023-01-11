package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiV2010AccountConferenceParticipant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public ApiV2010AccountConferenceParticipant withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid")
    public String callSid;
    public ApiV2010AccountConferenceParticipant withCallSid(String callSid) {
        this.callSid = callSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("call_sid_to_coach")
    public String callSidToCoach;
    public ApiV2010AccountConferenceParticipant withCallSidToCoach(String callSidToCoach) {
        this.callSidToCoach = callSidToCoach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coaching")
    public Boolean coaching;
    public ApiV2010AccountConferenceParticipant withCoaching(Boolean coaching) {
        this.coaching = coaching;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conference_sid")
    public String conferenceSid;
    public ApiV2010AccountConferenceParticipant withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_created")
    public String dateCreated;
    public ApiV2010AccountConferenceParticipant withDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date_updated")
    public String dateUpdated;
    public ApiV2010AccountConferenceParticipant withDateUpdated(String dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_conference_on_exit")
    public Boolean endConferenceOnExit;
    public ApiV2010AccountConferenceParticipant withEndConferenceOnExit(Boolean endConferenceOnExit) {
        this.endConferenceOnExit = endConferenceOnExit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hold")
    public Boolean hold;
    public ApiV2010AccountConferenceParticipant withHold(Boolean hold) {
        this.hold = hold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ApiV2010AccountConferenceParticipant withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("muted")
    public Boolean muted;
    public ApiV2010AccountConferenceParticipant withMuted(Boolean muted) {
        this.muted = muted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_conference_on_enter")
    public Boolean startConferenceOnEnter;
    public ApiV2010AccountConferenceParticipant withStartConferenceOnEnter(Boolean startConferenceOnEnter) {
        this.startConferenceOnEnter = startConferenceOnEnter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ParticipantEnumStatusEnum status;
    public ApiV2010AccountConferenceParticipant withStatus(ParticipantEnumStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ApiV2010AccountConferenceParticipant withUri(String uri) {
        this.uri = uri;
        return this;
    }
}