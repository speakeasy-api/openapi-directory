package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarEventsDeletePathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public String eventId;
    public CalendarEventsDeletePathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}