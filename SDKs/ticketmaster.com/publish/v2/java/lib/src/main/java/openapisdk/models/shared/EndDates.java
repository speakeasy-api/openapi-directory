package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EndDates
 * Event's End Dates
**/
public class EndDates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approximate")
    public Boolean approximate;
    public EndDates withApproximate(Boolean approximate) {
        this.approximate = approximate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateTime")
    public OffsetDateTime dateTime;
    public EndDates withDateTime(OffsetDateTime dateTime) {
        this.dateTime = dateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localTime")
    public LocalTime localTime;
    public EndDates withLocalTime(LocalTime localTime) {
        this.localTime = localTime;
        return this;
    }
}