package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BusinessCallsSettings
 * Business calls settings for a location.
**/
public class BusinessCallsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callsState")
    public BusinessCallsSettingsCallsStateEnum callsState;
    public BusinessCallsSettings withCallsState(BusinessCallsSettingsCallsStateEnum callsState) {
        this.callsState = callsState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentTime")
    public String consentTime;
    public BusinessCallsSettings withConsentTime(String consentTime) {
        this.consentTime = consentTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BusinessCallsSettings withName(String name) {
        this.name = name;
        return this;
    }
}