package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkGroupPolicyRequestBodyScheduling
 *     The schedule for the group policy. Schedules are applied to days of the week.
 * 
**/
public class CreateNetworkGroupPolicyRequestBodyScheduling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CreateNetworkGroupPolicyRequestBodyScheduling withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friday")
    public CreateNetworkGroupPolicyRequestBodySchedulingFriday friday;
    public CreateNetworkGroupPolicyRequestBodyScheduling withFriday(CreateNetworkGroupPolicyRequestBodySchedulingFriday friday) {
        this.friday = friday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monday")
    public CreateNetworkGroupPolicyRequestBodySchedulingMonday monday;
    public CreateNetworkGroupPolicyRequestBodyScheduling withMonday(CreateNetworkGroupPolicyRequestBodySchedulingMonday monday) {
        this.monday = monday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturday")
    public CreateNetworkGroupPolicyRequestBodySchedulingSaturday saturday;
    public CreateNetworkGroupPolicyRequestBodyScheduling withSaturday(CreateNetworkGroupPolicyRequestBodySchedulingSaturday saturday) {
        this.saturday = saturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday")
    public CreateNetworkGroupPolicyRequestBodySchedulingSunday sunday;
    public CreateNetworkGroupPolicyRequestBodyScheduling withSunday(CreateNetworkGroupPolicyRequestBodySchedulingSunday sunday) {
        this.sunday = sunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thursday")
    public CreateNetworkGroupPolicyRequestBodySchedulingThursday thursday;
    public CreateNetworkGroupPolicyRequestBodyScheduling withThursday(CreateNetworkGroupPolicyRequestBodySchedulingThursday thursday) {
        this.thursday = thursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tuesday")
    public CreateNetworkGroupPolicyRequestBodySchedulingTuesday tuesday;
    public CreateNetworkGroupPolicyRequestBodyScheduling withTuesday(CreateNetworkGroupPolicyRequestBodySchedulingTuesday tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wednesday")
    public CreateNetworkGroupPolicyRequestBodySchedulingWednesday wednesday;
    public CreateNetworkGroupPolicyRequestBodyScheduling withWednesday(CreateNetworkGroupPolicyRequestBodySchedulingWednesday wednesday) {
        this.wednesday = wednesday;
        return this;
    }
}