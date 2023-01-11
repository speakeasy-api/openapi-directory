package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OneTimeSchedule
 * Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
**/
public class OneTimeSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executeTime")
    public String executeTime;
    public OneTimeSchedule withExecuteTime(String executeTime) {
        this.executeTime = executeTime;
        return this;
    }
}