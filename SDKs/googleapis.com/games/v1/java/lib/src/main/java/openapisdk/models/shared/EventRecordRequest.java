package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventRecordRequest
 * An event period update resource.
**/
public class EventRecordRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentTimeMillis")
    public String currentTimeMillis;
    public EventRecordRequest withCurrentTimeMillis(String currentTimeMillis) {
        this.currentTimeMillis = currentTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventRecordRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public EventRecordRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timePeriods")
    public EventPeriodUpdate[] timePeriods;
    public EventRecordRequest withTimePeriods(EventPeriodUpdate[] timePeriods) {
        this.timePeriods = timePeriods;
        return this;
    }
}