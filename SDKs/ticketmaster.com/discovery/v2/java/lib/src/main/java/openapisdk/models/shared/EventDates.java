package openapisdk.models.shared;



/**
 * EventDates
 * Event's Dates
**/
public class EventDates {
    public AccessDates access;
    public EventDates withAccess(AccessDates access) {
        this.access = access;
        return this;
    }
    public EndDates end;
    public EventDates withEnd(EndDates end) {
        this.end = end;
        return this;
    }
    public Boolean spanMultipleDays;
    public EventDates withSpanMultipleDays(Boolean spanMultipleDays) {
        this.spanMultipleDays = spanMultipleDays;
        return this;
    }
    public StartDates start;
    public EventDates withStart(StartDates start) {
        this.start = start;
        return this;
    }
    public EventStatus status;
    public EventDates withStatus(EventStatus status) {
        this.status = status;
        return this;
    }
    public String timezone;
    public EventDates withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}