package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarEventsWatchPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}