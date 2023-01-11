package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SystraceSetup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationSeconds")
    public Integer durationSeconds;
    public SystraceSetup withDurationSeconds(Integer durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
}