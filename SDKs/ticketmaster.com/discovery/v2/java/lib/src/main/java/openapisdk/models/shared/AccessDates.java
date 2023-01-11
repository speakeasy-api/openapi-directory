package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * AccessDates
 * Event's Access Date
**/
public class AccessDates {
    public Boolean endApproximate;
    public AccessDates withEndApproximate(Boolean endApproximate) {
        this.endApproximate = endApproximate;
        return this;
    }
    public OffsetDateTime endDateTime;
    public AccessDates withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    public Boolean startApproximate;
    public AccessDates withStartApproximate(Boolean startApproximate) {
        this.startApproximate = startApproximate;
        return this;
    }
    public OffsetDateTime startDateTime;
    public AccessDates withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
}