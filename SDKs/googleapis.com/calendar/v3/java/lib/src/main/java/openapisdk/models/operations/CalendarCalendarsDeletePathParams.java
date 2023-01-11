package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarCalendarsDeletePathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}