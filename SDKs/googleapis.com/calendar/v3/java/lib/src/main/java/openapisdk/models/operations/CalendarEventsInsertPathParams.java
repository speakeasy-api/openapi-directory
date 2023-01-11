package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarEventsInsertPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}