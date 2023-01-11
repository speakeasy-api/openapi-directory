package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarEventsListPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}