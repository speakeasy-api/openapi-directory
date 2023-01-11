package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarCalendarListUpdatePathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}