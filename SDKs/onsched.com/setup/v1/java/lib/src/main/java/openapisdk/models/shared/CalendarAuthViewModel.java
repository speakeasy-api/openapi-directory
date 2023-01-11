package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalendarAuthViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarAuthUrl")
    public String calendarAuthUrl;
    public CalendarAuthViewModel withCalendarAuthUrl(String calendarAuthUrl) {
        this.calendarAuthUrl = calendarAuthUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarId")
    public String calendarId;
    public CalendarAuthViewModel withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public CalendarAuthViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
}