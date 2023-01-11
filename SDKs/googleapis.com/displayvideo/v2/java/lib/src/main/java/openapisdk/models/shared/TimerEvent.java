package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimerEvent
 * Timer event of the creative.
**/
public class TimerEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TimerEvent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingName")
    public String reportingName;
    public TimerEvent withReportingName(String reportingName) {
        this.reportingName = reportingName;
        return this;
    }
}