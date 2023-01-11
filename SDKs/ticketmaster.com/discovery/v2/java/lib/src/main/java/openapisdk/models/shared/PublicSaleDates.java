package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * PublicSaleDates
 * Event's Public Onsales Dates
**/
public class PublicSaleDates {
    public OffsetDateTime endDateTime;
    public PublicSaleDates withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    public OffsetDateTime startDateTime;
    public PublicSaleDates withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    public Boolean startTBD;
    public PublicSaleDates withStartTbd(Boolean startTBD) {
        this.startTBD = startTBD;
        return this;
    }
}