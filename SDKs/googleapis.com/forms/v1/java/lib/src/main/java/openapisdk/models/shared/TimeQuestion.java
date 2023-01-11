package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeQuestion
 * A time question.
**/
public class TimeQuestion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Boolean duration;
    public TimeQuestion withDuration(Boolean duration) {
        this.duration = duration;
        return this;
    }
}