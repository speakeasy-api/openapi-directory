package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchedulePolicy
 * A policy for scheduling replications.
**/
public class SchedulePolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idleDuration")
    public String idleDuration;
    public SchedulePolicy withIdleDuration(String idleDuration) {
        this.idleDuration = idleDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipOsAdaptation")
    public Boolean skipOsAdaptation;
    public SchedulePolicy withSkipOsAdaptation(Boolean skipOsAdaptation) {
        this.skipOsAdaptation = skipOsAdaptation;
        return this;
    }
}