package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StartDates
 * Event's Start Dates
**/
public class StartDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTBA")
    public Boolean dateTBA;
    public StartDates withDateTba(Boolean dateTBA) {
        this.dateTBA = dateTBA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTBD")
    public Boolean dateTBD;
    public StartDates withDateTbd(Boolean dateTBD) {
        this.dateTBD = dateTBD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateTime")
    public OffsetDateTime dateTime;
    public StartDates withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localDate")
    public LocalDate localDate;
    public StartDates withLocalDate(LocalDate localDate) {
        this.localDate = localDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localTime")
    public LocalTime localTime;
    public StartDates withLocalTime(LocalTime localTime) {
        this.localTime = localTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noSpecificTime")
    public Boolean noSpecificTime;
    public StartDates withNoSpecificTime(Boolean noSpecificTime) {
        this.noSpecificTime = noSpecificTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeTBA")
    public Boolean timeTBA;
    public StartDates withTimeTba(Boolean timeTBA) {
        this.timeTBA = timeTBA;
        return this;
    }
}