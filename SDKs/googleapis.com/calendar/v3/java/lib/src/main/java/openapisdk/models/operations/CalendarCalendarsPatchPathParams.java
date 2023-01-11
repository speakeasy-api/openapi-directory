package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarCalendarsPatchPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}