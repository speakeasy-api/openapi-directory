package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PausedStateContext
 * Information specific to a subscription in paused state.
**/
public class PausedStateContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoResumeTime")
    public String autoResumeTime;
    public PausedStateContext withAutoResumeTime(String autoResumeTime) {
        this.autoResumeTime = autoResumeTime;
        return this;
    }
}