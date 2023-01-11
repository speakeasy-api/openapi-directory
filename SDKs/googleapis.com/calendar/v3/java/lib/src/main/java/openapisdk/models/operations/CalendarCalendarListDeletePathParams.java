package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarCalendarListDeletePathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}