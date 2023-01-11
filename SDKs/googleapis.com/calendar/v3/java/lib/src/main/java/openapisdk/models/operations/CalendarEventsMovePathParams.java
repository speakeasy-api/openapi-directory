package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsMovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarEventsMovePathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=eventId")
    public String eventId;
    public CalendarEventsMovePathParams withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
}