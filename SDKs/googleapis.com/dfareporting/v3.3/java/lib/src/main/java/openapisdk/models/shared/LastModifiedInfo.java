package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LastModifiedInfo
 * Modification timestamp.
**/
public class LastModifiedInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public LastModifiedInfo withTime(String time) {
        this.time = time;
        return this;
    }
}