package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsQuickAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarEventsQuickAddPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}