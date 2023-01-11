package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventInsights
 * A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.
**/
public class EventInsights {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playoff")
    public java.util.Map<String, Object> playoff;
    public EventInsights withPlayoff(java.util.Map<String, Object> playoff) {
        this.playoff = playoff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qual")
    public java.util.Map<String, Object> qual;
    public EventInsights withQual(java.util.Map<String, Object> qual) {
        this.qual = qual;
        return this;
    }
}