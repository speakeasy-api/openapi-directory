package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CalendarBlockViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarId")
    public String calendarId;
    public CalendarBlockViewModel withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDate")
    public OffsetDateTime endDate;
    public CalendarBlockViewModel withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public Integer endTime;
    public CalendarBlockViewModel withEndTime(Integer endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CalendarBlockViewModel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public CalendarBlockViewModel withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public CalendarBlockViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public CalendarBlockViewModel withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeat")
    public RepeatViewModel repeat;
    public CalendarBlockViewModel withRepeat(RepeatViewModel repeat) {
        this.repeat = repeat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repeats")
    public Boolean repeats;
    public CalendarBlockViewModel withRepeats(Boolean repeats) {
        this.repeats = repeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDate")
    public OffsetDateTime startDate;
    public CalendarBlockViewModel withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public Integer startTime;
    public CalendarBlockViewModel withStartTime(Integer startTime) {
        this.startTime = startTime;
        return this;
    }
}