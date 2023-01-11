package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkGroupPolicyRequestBodyScheduling
 *     The schedule for the group policy. Schedules are applied to days of the week.
 * 
**/
public class UpdateNetworkGroupPolicyRequestBodyScheduling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friday")
    public UpdateNetworkGroupPolicyRequestBodySchedulingFriday friday;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withFriday(UpdateNetworkGroupPolicyRequestBodySchedulingFriday friday) {
        this.friday = friday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monday")
    public UpdateNetworkGroupPolicyRequestBodySchedulingMonday monday;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withMonday(UpdateNetworkGroupPolicyRequestBodySchedulingMonday monday) {
        this.monday = monday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturday")
    public UpdateNetworkGroupPolicyRequestBodySchedulingSaturday saturday;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withSaturday(UpdateNetworkGroupPolicyRequestBodySchedulingSaturday saturday) {
        this.saturday = saturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday")
    public UpdateNetworkGroupPolicyRequestBodySchedulingSunday sunday;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withSunday(UpdateNetworkGroupPolicyRequestBodySchedulingSunday sunday) {
        this.sunday = sunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thursday")
    public UpdateNetworkGroupPolicyRequestBodySchedulingThursday thursday;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withThursday(UpdateNetworkGroupPolicyRequestBodySchedulingThursday thursday) {
        this.thursday = thursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tuesday")
    public UpdateNetworkGroupPolicyRequestBodySchedulingTuesday tuesday;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withTuesday(UpdateNetworkGroupPolicyRequestBodySchedulingTuesday tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wednesday")
    public UpdateNetworkGroupPolicyRequestBodySchedulingWednesday wednesday;
    public UpdateNetworkGroupPolicyRequestBodyScheduling withWednesday(UpdateNetworkGroupPolicyRequestBodySchedulingWednesday wednesday) {
        this.wednesday = wednesday;
        return this;
    }
}