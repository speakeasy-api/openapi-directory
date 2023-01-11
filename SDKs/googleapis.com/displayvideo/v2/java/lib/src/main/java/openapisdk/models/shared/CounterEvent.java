package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CounterEvent
 * Counter event of the creative.
**/
public class CounterEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CounterEvent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingName")
    public String reportingName;
    public CounterEvent withReportingName(String reportingName) {
        this.reportingName = reportingName;
        return this;
    }
}