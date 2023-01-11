package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;

/**
 * EndDates
 * Event's End Dates
**/
public class EndDates {
    public Boolean approximate;
    public EndDates withApproximate(Boolean approximate) {
        this.approximate = approximate;
        return this;
    }
    public OffsetDateTime dateTime;
    public EndDates withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    public LocalDate localDate;
    public EndDates withLocalDate(LocalDate localDate) {
        this.localDate = localDate;
        return this;
    }
    public LocalTime localTime;
    public EndDates withLocalTime(LocalTime localTime) {
        this.localTime = localTime;
        return this;
    }
    public Boolean noSpecificTime;
    public EndDates withNoSpecificTime(Boolean noSpecificTime) {
        this.noSpecificTime = noSpecificTime;
        return this;
    }
}