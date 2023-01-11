package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WarehouseCutoffTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hour")
    public Integer hour;
    public WarehouseCutoffTime withHour(Integer hour) {
        this.hour = hour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minute")
    public Integer minute;
    public WarehouseCutoffTime withMinute(Integer minute) {
        this.minute = minute;
        return this;
    }
}