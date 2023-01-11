package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FreeBusyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendars")
    public java.util.Map<String, FreeBusyCalendar> calendars;
    public FreeBusyResponse withCalendars(java.util.Map<String, FreeBusyCalendar> calendars) {
        this.calendars = calendars;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public java.util.Map<String, FreeBusyGroup> groups;
    public FreeBusyResponse withGroups(java.util.Map<String, FreeBusyGroup> groups) {
        this.groups = groups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FreeBusyResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeMax")
    public OffsetDateTime timeMax;
    public FreeBusyResponse withTimeMax(OffsetDateTime timeMax) {
        this.timeMax = timeMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timeMin")
    public OffsetDateTime timeMin;
    public FreeBusyResponse withTimeMin(OffsetDateTime timeMin) {
        this.timeMin = timeMin;
        return this;
    }
}