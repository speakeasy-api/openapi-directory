package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CutoffTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hour")
    public Long hour;
    public CutoffTime withHour(Long hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minute")
    public Long minute;
    public CutoffTime withMinute(Long minute) {
        this.minute = minute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public CutoffTime withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}