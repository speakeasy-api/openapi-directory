package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarCalendarsUpdatePathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}