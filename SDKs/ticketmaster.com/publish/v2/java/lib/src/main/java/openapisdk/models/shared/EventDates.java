package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventDates
 * Event's Dates
**/
public class EventDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public AccessDates access;
    public EventDates withAccess(AccessDates access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end")
    public EndDates end;
    public EventDates withEnd(EndDates end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public StartDates start;
    public EventDates withStart(StartDates start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EventStatus status;
    public EventDates withStatus(EventStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public EventDates withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}