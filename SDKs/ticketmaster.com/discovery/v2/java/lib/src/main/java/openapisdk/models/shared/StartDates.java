package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;

/**
 * StartDates
 * Event's Start Dates
**/
public class StartDates {
    public Boolean dateTBA;
    public StartDates withDateTba(Boolean dateTBA) {
        this.dateTBA = dateTBA;
        return this;
    }
    public Boolean dateTBD;
    public StartDates withDateTbd(Boolean dateTBD) {
        this.dateTBD = dateTBD;
        return this;
    }
    public OffsetDateTime dateTime;
    public StartDates withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    public LocalDate localDate;
    public StartDates withLocalDate(LocalDate localDate) {
        this.localDate = localDate;
        return this;
    }
    public LocalTime localTime;
    public StartDates withLocalTime(LocalTime localTime) {
        this.localTime = localTime;
        return this;
    }
    public Boolean noSpecificTime;
    public StartDates withNoSpecificTime(Boolean noSpecificTime) {
        this.noSpecificTime = noSpecificTime;
        return this;
    }
    public Boolean timeTBA;
    public StartDates withTimeTba(Boolean timeTBA) {
        this.timeTBA = timeTBA;
        return this;
    }
}