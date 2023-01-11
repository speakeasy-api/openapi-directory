package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarEventsImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=calendarId")
    public String calendarId;
    public CalendarEventsImportPathParams withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
}