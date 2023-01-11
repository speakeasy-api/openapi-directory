package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FreeBusyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarExpansionMax")
    public Integer calendarExpansionMax;
    public FreeBusyRequest withCalendarExpansionMax(Integer calendarExpansionMax) {
        this.calendarExpansionMax = calendarExpansionMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupExpansionMax")
    public Integer groupExpansionMax;
    public FreeBusyRequest withGroupExpansionMax(Integer groupExpansionMax) {
        this.groupExpansionMax = groupExpansionMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public FreeBusyRequestItem[] items;
    public FreeBusyRequest withItems(FreeBusyRequestItem[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeMax")
    public OffsetDateTime timeMax;
    public FreeBusyRequest withTimeMax(OffsetDateTime timeMax) {
        this.timeMax = timeMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeMin")
    public OffsetDateTime timeMin;
    public FreeBusyRequest withTimeMin(OffsetDateTime timeMin) {
        this.timeMin = timeMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public FreeBusyRequest withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
}