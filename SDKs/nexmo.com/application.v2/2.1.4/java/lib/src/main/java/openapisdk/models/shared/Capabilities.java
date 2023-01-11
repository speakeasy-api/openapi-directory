package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Capabilities
 * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
**/
public class Capabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetings")
    public MeetingsCapability meetings;
    public Capabilities withMeetings(MeetingsCapability meetings) {
        this.meetings = meetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messages")
    public MessagesCapability messages;
    public Capabilities withMessages(MessagesCapability messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rtc")
    public RtcCapability rtc;
    public Capabilities withRtc(RtcCapability rtc) {
        this.rtc = rtc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vbc")
    public java.util.Map<String, Object> vbc;
    public Capabilities withVbc(java.util.Map<String, Object> vbc) {
        this.vbc = vbc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verify")
    public VerifyCapability verify;
    public Capabilities withVerify(VerifyCapability verify) {
        this.verify = verify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice")
    public VoiceCapability voice;
    public Capabilities withVoice(VoiceCapability voice) {
        this.voice = voice;
        return this;
    }
}