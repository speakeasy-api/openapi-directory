package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntryPoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessCode")
    public String accessCode;
    public EntryPoint withAccessCode(String accessCode) {
        this.accessCode = accessCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryPointFeatures")
    public String[] entryPointFeatures;
    public EntryPoint withEntryPointFeatures(String[] entryPointFeatures) {
        this.entryPointFeatures = entryPointFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryPointType")
    public String entryPointType;
    public EntryPoint withEntryPointType(String entryPointType) {
        this.entryPointType = entryPointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public EntryPoint withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetingCode")
    public String meetingCode;
    public EntryPoint withMeetingCode(String meetingCode) {
        this.meetingCode = meetingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passcode")
    public String passcode;
    public EntryPoint withPasscode(String passcode) {
        this.passcode = passcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public EntryPoint withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pin")
    public String pin;
    public EntryPoint withPin(String pin) {
        this.pin = pin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public EntryPoint withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public EntryPoint withUri(String uri) {
        this.uri = uri;
        return this;
    }
}