package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarCalendarListGetPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}