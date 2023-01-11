package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarCalendarListPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarCalendarListPatchPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}